import React, { useState } from "react";
import "./ChitPayments.css";
import { SinglePaymentModal, BulkPaymentModal } from "./PaymentModals";
import { ReceiptModal } from "./ReceiptModal";

/* ── helpers ── */
const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#6366f1"];
const getColor = (i) => COLORS[i % COLORS.length];
const getInitials = (g) =>
  g
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

/* ── Static data ── */
const customer = {
  name: "Arun Kumar",
  customerId: "CUS-1001",
  phone: "9876543210",
  address: "12, Anna Nagar, Madurai",
  joinedDate: "12 Jan 2024",
  totalPaid: "₹1,25,000",
  pending: "₹18,000",
  groups: 3,
  overdueDays: 12,
};

const groupData = [
  {
    group: "Gold Savings",
    chitValue: "₹5,00,000",
    installment: "14 / 20",
    monthly: "₹25,000",
    paid: "₹3,50,000",
    pending: "₹1,50,000",
    status: "Running",
    dueDate: "2026-03-10",
  },
  {
    group: "Family Plan",
    chitValue: "₹2,00,000",
    installment: "08 / 12",
    monthly: "₹16,500",
    paid: "₹1,32,000",
    pending: "₹68,000",
    status: "Running",
    dueDate: "2026-04-01",
  },
  {
    group: "Silver Growth",
    chitValue: "₹1,50,000",
    installment: "12 / 12",
    monthly: "₹12,500",
    paid: "₹1,50,000",
    pending: "₹0",
    status: "Completed",
    dueDate: null,
  },
];

const payments = [
  { date: "10 Apr 2026", group: "Gold Savings", amount: "₹25,000", mode: "Cash", type: "Single", receiptNo: "RCP-11001" },
  { date: "10 Apr 2026", group: "Bulk Payment", amount: "₹41,500", mode: "UPI", type: "Bulk", receiptNo: "RCP-11002" },
  { date: "10 Mar 2026", group: "Family Plan", amount: "₹16,500", mode: "Bank", type: "Single", receiptNo: "RCP-10991" },
];

export const ChitPaymentList = () => {
  const [showSingleModal, setShowSingleModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);
  const [viewReceipt, setViewReceipt] = useState(null);

  const openSingle = (item) => {
    setActiveGroup(item);
    setShowSingleModal(true);
  };
  const closeSingle = () => {
    setShowSingleModal(false);
    setActiveGroup(null);
  };

  return (
    <>
      {/* ── Page Header ── */}
      <div className="wrapper_header mb-3">
        <div>
          <h5 className="header_title">Customer Payment Detail</h5>
          <p className="header_text">Joined groups, installment status, payment history and payment actions.</p>
        </div>
      </div>

      {/* ── Profile Card ── */}
      <div className="stack_box_list mb-3">
        <div className="row gy-4">
          <div className="col-lg-3">
            <div className="customer_detail_card">
              <div className="avatar_circle">AK</div>
              <div>
                <h3>{customer.name}</h3>
                <p>ID: {customer.customerId}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="stack_box blue">
              <span className="stack_icon">
                <i className="fi fi-rs-chart-mixed-up-circle-dollar" />
              </span>
              <div className="d-flex justify-content-between gap-2">
                <div className="content">
                  <h5 className="box_text">Total Paid</h5>
                  <h4 className="box_title">₹1,25,000</h4>
                </div>
                <div className="box_icon">
                  <div className="ico icon_batch">
                    <i className="fi fi-rs-plan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="stack_box green">
              <span className="stack_icon">
                <i className="fi fi-rs-coworking" />
              </span>
              <div className="d-flex justify-content-between gap-2">
                <div className="content">
                  <h5 className="box_text">Total Pending</h5>
                  <h4 className="box_title">₹18,000</h4>
                </div>
                <div className="box_icon">
                  <div className="ico icon_group">
                    <i className="fi fi-rs-users-alt" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="stack_box violet">
              <span className="stack_icon">
                <i className="fi fi-rs-auction-paddle" />
              </span>
              <div className="d-flex justify-content-between gap-2">
                <div className="content">
                  <h5 className="box_text">Active Groups</h5>
                  <h4 className="box_title">3</h4>
                </div>
                <div className="box_icon">
                  <div className="ico icon_plan">
                    <i className="fi fi-rs-calendar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Groups Table ── */}
      <div className="wrapper-table-outer mb-4">
        <div className="table-header d-flex justify-content-between align-items-center">
          <h6>
            <i className="fi fi-rs-wallet-money me-2" />
            Payment List
          </h6>
          <button className="btn filter-btn" onClick={() => setShowBulkModal(true)}>
            <i className="bi bi-stack me-1" /> Bulk Payment
          </button>
        </div>

        <div className="table-responsive">
          <table className="premium_table">
            <thead>
              <tr>
                <th>Group Name</th>
                <th>Chit Value</th>
                <th>Installment</th>
                <th>Monthly</th>
                <th>Paid</th>
                <th>Pending</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {groupData.map((item, i) => (
                <tr key={i}>
                  <td className="customer_cell">
                    <span className="name_badge" style={{ background: getColor(i) }}>
                      {getInitials(item.group)}
                    </span>
                    {item.group}
                  </td>
                  <td>{item.chitValue}</td>
                  <td>
                    <div style={{ fontSize: ".8rem" }}>
                      {item.installment}
                      <div className="mt-1" style={{ height: 4, borderRadius: 2, background: "#e5e7eb", width: 80 }}>
                        <div
                          style={{
                            height: "100%",
                            borderRadius: 2,
                            background: getColor(i),
                            width: (parseInt(item.installment.split("/")[0]) / parseInt(item.installment.split("/")[1])) * 100 + "%",
                          }}
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.monthly}</td>
                  <td className="text-success fw-700">{item.paid}</td>
                  <td className={item.pending === "₹0" ? "text-success-custom" : "text-danger-custom fw-700"}>{item.pending}</td>
                  <td>
                    <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                  </td>
                  <td>
                    {item.status === "Running" ? (
                      <button className="light-btn" onClick={() => openSingle(item)}>
                        + Add Payment
                      </button>
                    ) : (
                      <span className="row_pay_disabled">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Payment History ── */}
      <div className="wrapper-table-outer">
        <div className="table-header d-flex justify-content-between align-items-center">
          <h6>
            <i className="fi fi-rs-rectangle-history-circle-plus me-2" />
            Payment History
          </h6>
          <small className="bg-warning-subtle text-dark border border-warning-subtle p-1 rounded-1" style={{ fontSize: "12px", fontWeight: "500" }}>
            {payments.length} records
          </small>
        </div>

        <div className="table-responsive">
          <table className="premium_table">
            <thead>
              <tr>
                <th>Receipt No.</th>
                <th>Date</th>
                <th>Group</th>
                <th>Amount</th>
                <th>Mode</th>
                <th>Type</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item, i) => (
                <tr key={i}>
                  <td className="fs-12 text-muted">{item.receiptNo}</td>
                  <td>{item.date}</td>
                  <td className="customer_cell">
                    <span className="name_badge" style={{ background: getColor(i) }}>
                      {getInitials(item.group)}
                    </span>
                    {item.group}
                  </td>
                  <td className="text-success fw-700">{item.amount}</td>
                  <td>
                    <span
                      className="badge"
                      style={{
                        background: item.mode === "UPI" ? "#eef2ff" : item.mode === "Cash" ? "#dcfce7" : "#f0fdf4",
                        color: item.mode === "UPI" ? "#4f46e5" : item.mode === "Cash" ? "#16a34a" : "#0891b2",
                        fontSize: ".72rem",
                      }}>
                      {item.mode}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${item.type === "Bulk" ? "bg-warning text-dark" : "bg-info text-dark"}`} style={{ fontSize: ".72rem" }}>
                      {item.type}
                    </span>
                  </td>
                  <td>
                    <button
                      className="bi btn btn-sm bg-primary-subtle text-primary border border-primary-subtle"
                      style={{ fontSize: ".75rem", padding: "3px 10px" }}
                      onClick={() =>
                        setViewReceipt({
                          receiptNo: item.receiptNo,
                          date: item.date,
                          customer: customer.name,
                          customerId: customer.customerId,
                          phone: customer.phone,
                          address: customer.address,
                          group: item.group,
                          chitValue: "—",
                          installmentNo: "—",
                          installment: "—",
                          amount: Number(String(item.amount).replace(/[₹,\s]/g, "")),
                          penalty: 0,
                          gst: 0,
                          total: Number(String(item.amount).replace(/[₹,\s]/g, "")),
                          mode: item.mode,
                          txnRef: "",
                          gstEnabled: false,
                          penaltyRate: 1.5,
                          overdueDays: 0,
                        })
                      }>
                      <i className="bi bi-file-earmark-text" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Modals ── */}
      {showSingleModal && <SinglePaymentModal group={activeGroup} customer={customer} onClose={closeSingle} onSubmit={() => {}} />}
      {showBulkModal && <BulkPaymentModal groupData={groupData} customer={customer} onClose={() => setShowBulkModal(false)} />}
      {viewReceipt && <ReceiptModal receipt={viewReceipt} onClose={() => setViewReceipt(null)} />}
    </>
  );
};
