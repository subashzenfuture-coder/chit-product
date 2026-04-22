import React from "react";
import "./Dashboard.css";
import { CollectionChart } from "./CollectionChart";
import { PaymentStatusChart } from "./PaymentStatusChart";
import { CustomerGrowthChart } from "./CustomerGrowthChart";

const activityData = [
  { date: "13.04.2026", name: "Arun Kumar", group: "Group-A", amount: 25000, status: "Credited" },
  { date: "12.04.2026", name: "Ravi Kumar", group: "Group-B", amount: 18000, status: "Pending" },
  { date: "11.04.2026", name: "Suresh Babu", group: "Group-C", amount: 32000, status: "Credited" },
  { date: "10.04.2026", name: "Vijay Raj", group: "Group-D", amount: 21000, status: "Failed" },
  { date: "09.04.2026", name: "Mani Selvam", group: "Group-A", amount: 27000, status: "Credited" },
  { date: "08.04.2026", name: "Karthik", group: "Group-B", amount: 15000, status: "Pending" },
  { date: "07.04.2026", name: "Prakash", group: "Group-C", amount: 35000, status: "Credited" },
  { date: "06.04.2026", name: "Dinesh", group: "Group-D", amount: 19000, status: "Failed" },
  { date: "05.04.2026", name: "Gokul", group: "Group-A", amount: 22000, status: "Credited" },
  { date: "04.04.2026", name: "Senthil", group: "Group-B", amount: 28000, status: "Pending" },
];

const colors = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#6366f1"];

const getColor = (index) => colors[index % colors.length];

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const stackData = [
  {
    title: "Total Active Chits",
    count: "142",
    icon: "fi fi-rs-workflow",
    badge: "Active",
    extra: (
      <small>
        <span className="text-success">+12%</span> vs last Month
      </small>
    ),
  },
  {
    title: "Collection (Month)",
    count: "₹8.4M",
    icon: "fi fi-rs-sack-dollar",
    progress: true,
  },
  {
    title: "Pending Dues",
    count: "₹1.2M",
    icon: "fi fi-rs-diamond-exclamation",
    extra: <small className="p-1 bg-warning-subtle text-dark rounded-1">Action Required</small>,
  },
  {
    title: "Disbursement",
    count: "₹6.1M",
    icon: "fi fi-rs-expense",
    extra: (
      <small>
        <b>8</b> Payouts This Week
      </small>
    ),
  },
];

export const Dashboard = () => {
  const percent = 65;

  return (
    <>
      <div className="stack_list">
        <div className="row gy-4">
          {stackData.map((item, index) => (
            <div className="col-lg-3 col-md-3" key={index}>
              <div className="stack_card">
                {/* Badge */}
                {item.badge && <span className="stack_badge">{item.badge}</span>}

                {/* Icon */}
                <div className="icon">
                  <i className={item.icon}></i>
                </div>

                {/* Title */}
                <h5 className="stack_title">{item.title}</h5>

                {/* Count */}
                <p className="stack_count">{item.count}</p>

                {/* Progress */}
                {item.progress && (
                  <div className="progress_wrapper">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${percent}%` }}></div>
                    </div>
                    <span className="progress_text">{percent}%</span>
                  </div>
                )}

                {/* Extra */}
                {item.extra}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="row gy-4">
              <div className="col-lg-12">
                <CollectionChart />
              </div>
              <div className="col-lg-6">
                <CustomerGrowthChart />
              </div>
              <div className="col-lg-6">
                <PaymentStatusChart />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="auction_detail">
              <h6 className="mb-4">Upcoming Auctions</h6>
              <div className="row gy-3">
                <div className="col-lg-12">
                  <div className="auction_card">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h5 className="card-title">Gold_SEC_01</h5>
                      <small className="date_text">Tommorow</small>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <p className="card-text">Value</p>
                        <h6 className="card-count">₹50,0000</h6>
                      </div>
                      <div className="text-end">
                        <p className="card-text">Time</p>
                        <h6 className="card-time">11.30 AM</h6>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button className="btn auction-btn w-100">Manage Auctions</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="auction_card">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h5 className="card-title">Gold_SEC_02</h5>
                      <small className="date_text">Wed 15 APR</small>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <p className="card-text">Value</p>
                        <h6 className="card-count">₹10,0000</h6>
                      </div>
                      <div className="text-end">
                        <p className="card-text">Time</p>
                        <h6 className="card-time">11.30 AM</h6>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button className="btn auction-btn w-100">Manage Auctions</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="auction_card">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h5 className="card-title">Gold_SEC_03</h5>
                      <small className="date_text">THU 23 APR</small>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <p className="card-text">Value</p>
                        <h6 className="card-count">₹15,0000</h6>
                      </div>
                      <div className="text-end">
                        <p className="card-text">Time</p>
                        <h6 className="card-time">11.30 AM</h6>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button className="btn auction-btn w-100">Manage Auctions</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="auction_card">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h5 className="card-title">Gold_SEC_04</h5>
                      <small className="date_text">Fri 01 MAY</small>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <p className="card-text">Value</p>
                        <h6 className="card-count">₹25,0000</h6>
                      </div>
                      <div className="text-end">
                        <p className="card-text">Time</p>
                        <h6 className="card-time">11.30 AM</h6>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button className="btn auction-btn w-100">Manage Auctions</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper-table-outer mt-4">
        <div className="table-header">
          <h6>
            <i className="fi fi-rs-refresh me-2"></i>Recent Activity
          </h6>
        </div>

        <table className="premium_table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Group</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {activityData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>

                <td className="customer_cell">
                  <span className="name_badge" style={{ background: getColor(index) }}>
                    {getInitials(item.name)}
                  </span>
                  {item.name}
                </td>

                <td>{item.group}</td>

                <td>₹{item.amount.toLocaleString()}</td>

                <td>
                  <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
