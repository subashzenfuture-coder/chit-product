import React from "react";
import "./ChitPayments.css";
import { Link } from "react-router-dom";

/* ── helpers ── */
const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#6366f1"];
const getColor = (i) => COLORS[i % COLORS.length];
const getInitials = (name) =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase();

/* ── sample data ── */
const activityData = [
  { id: 1,  name: "Arun Kumar",   phone: "9876543210", aadhar: "1234 5678 9012", pan: "ABCDE1234F", address: "12, Anna Nagar, Madurai",     pending: "₹18,000", overdueDays: 12 },
  { id: 2,  name: "Ravi Kumar",   phone: "9876543211", aadhar: "2234 5678 9012", pan: "BCDEF2345G", address: "45, KK Nagar, Madurai",        pending: "₹25,000", overdueDays: 5  },
  { id: 3,  name: "Suresh Babu",  phone: "9876543212", aadhar: "3234 5678 9012", pan: "CDEFG3456H", address: "78, Melur Road, Madurai",      pending: "₹0",      overdueDays: 0  },
  { id: 4,  name: "Vijay Raj",    phone: "9876543213", aadhar: "4234 5678 9012", pan: "DEFGH4567I", address: "9, Thirunagar, Madurai",       pending: "₹16,500", overdueDays: 21 },
  { id: 5,  name: "Mani Selvam",  phone: "9876543214", aadhar: "5234 5678 9012", pan: "EFGHI5678J", address: "21, Villapuram, Madurai",      pending: "₹33,000", overdueDays: 3  },
  { id: 6,  name: "Karthik",      phone: "9876543215", aadhar: "6234 5678 9012", pan: "FGHIJ6789K", address: "3, Alagarkoil Road, Madurai",  pending: "₹0",      overdueDays: 0  },
  { id: 7,  name: "Prakash",      phone: "9876543216", aadhar: "7234 5678 9012", pan: "GHIJK7890L", address: "56, Teppakulam, Madurai",      pending: "₹12,500", overdueDays: 7  },
  { id: 8,  name: "Dinesh",       phone: "9876543217", aadhar: "8234 5678 9012", pan: "HIJKL8901M", address: "11, Avaniyapuram, Madurai",    pending: "₹0",      overdueDays: 0  },
  { id: 9,  name: "Gokul",        phone: "9876543218", aadhar: "9234 5678 9012", pan: "IJKLM9012N", address: "88, Mattuthavani, Madurai",    pending: "₹8,250",  overdueDays: 14 },
  { id: 10, name: "Senthil",      phone: "9876543219", aadhar: "1034 5678 9012", pan: "JKLMN0123O", address: "14, Pasumalai, Madurai",       pending: "₹0",      overdueDays: 0  },
];

export const ChitPayments = () => (
  <>
    {/* ── Header ── */}
    <div className="wrapper_header">
      <div>
        <h5 className="header_title">Chit Groups</h5>
        <p className="header_text">Configure and Manage Financial Pool For Subscribers</p>
      </div>
    </div>

    {/* ── Stat Cards ── */}
    <div className="stack_list mt-3">
      <div className="row gy-3">
        <div className="col-lg-3 col-md-6">
          <div className="stack_card">
            <div className="icon"><i className="fi fi-rs-users-alt" /></div>
            <h5 className="stack_title">Active Customers</h5>
            <p className="stack_count">12</p>
            <small><span className="mix_badge up">+12%</span> Higher Than Last Month</small>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stack_card">
            <div className="icon"><i className="fi fi-rs-sack-dollar" /></div>
            <h5 className="stack_title">This Month Collection</h5>
            <p className="stack_count">₹8.4M</p>
            <small><span className="mix_badge up">+21%</span> Revenue Growth</small>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stack_card">
            <div className="icon"><i className="fi fi-rs-sack-dollar" /></div>
            <h5 className="stack_title">Total Pending</h5>
            <p className="stack_count">₹1,13,250</p>
            <small><span className="mix_badge down">6 overdue</span> Customers</small>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stack_card">
            <div className="icon"><i className="fi fi-rs-triangle-warning" /></div>
            <h5 className="stack_title">Total Late Fees</h5>
            <p className="stack_count">₹2,847</p>
            <small><span className="mix_badge down">1.5%/mo</span> Penalty Rate</small>
          </div>
        </div>
      </div>
    </div>

    {/* ── Filter Bar (display only) ── */}
    <div className="filter-wrapper d-flex gap-2 align-items-center mb-3 flex-wrap">
      <div className="filter-header">
        <i className="bi bi-funnel-fill" />&nbsp;Filters :
      </div>
      <div className="search-item" style={{ minWidth: 200 }}>
        <div className="search-box">
          <input className="search-input" placeholder="Search by name or ID..." type="text" readOnly />
          <i className="bi bi-search search-icon" />
        </div>
      </div>
      <div style={{ minWidth: 140 }}>
        <select className="form-select form-select-sm" defaultValue="ALL">
          <option value="ALL">All Status</option>
          <option value="OVERDUE">Overdue</option>
          <option value="CLEAR">Cleared</option>
        </select>
      </div>
      <div className="d-flex align-items-center gap-2 ms-auto flex-wrap">
        <label className="fs-12">From:</label>
        <input className="form-control form-control-sm" type="date" style={{ width: 140 }} />
        <label className="fs-12">To:</label>
        <input className="form-control form-control-sm" type="date" style={{ width: 140 }} />
      </div>
    </div>

    {/* ── Table ── */}
    <div className="wrapper-table-outer mt-3">
      <div className="table-header d-flex justify-content-between align-items-center">
        <h6>
          <i className="fi fi-rs-users me-2" />
          Due Payments &nbsp;<span className="badge bg-secondary">{activityData.length}</span>
        </h6>
      </div>

      <div className="table-responsive">
        <table className="premium_table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Aadhar</th>
              <th>Overdue</th>
              <th>Pending</th>
              <th>Late Fee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {activityData.map((item, index) => (
              <tr key={item.id}>
                <td className="text-muted fs-12">{item.id}</td>
                <td className="customer_cell">
                  <span className="name_badge" style={{ background: getColor(index) }}>
                    {getInitials(item.name)}
                  </span>
                  {item.name}
                </td>
                <td>{item.phone}</td>
                <td className="fs-12">{item.aadhar}</td>
                <td>
                  {item.overdueDays > 0 ? (
                    <span className="overdue-badge">
                      <i className="bi bi-exclamation-circle" /> {item.overdueDays}d
                    </span>
                  ) : (
                    <span className="ontime-badge">
                      <i className="bi bi-check-circle" /> On time
                    </span>
                  )}
                </td>
                <td>
                  <span className={item.pending === "₹0" ? "text-success-custom fw-700" : "text-danger-custom fw-700"}>
                    {item.pending}
                  </span>
                </td>
                <td>
                  <span className="text-muted fs-12">—</span>
                </td>
                <td>
                  <Link to="/chit-payments/chit-payments-list">
                    <button className="light-btn">
                      <i className="bi bi-box-arrow-in-up-right me-1" />
                      Payments
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="table-footer">
            <tr>
              <td colSpan={5}>
                <div className="entry-count">
                  Showing {activityData.length} of {activityData.length} entries
                </div>
              </td>
              <td colSpan={5}>
                <div className="pagination">
                  <span className="page-btn">«</span>
                  <span className="page-number active">1</span>
                  <span className="page-btn">»</span>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </>
);