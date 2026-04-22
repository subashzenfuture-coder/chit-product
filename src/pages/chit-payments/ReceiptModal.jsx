import React from "react";
import "./ChitPayments.css";

export const ReceiptModal = ({ receipt, onClose }) => {
  const breakdown = [];
  if (receipt.penalty > 0) {
    breakdown.push(
      `₹${Number(receipt.amount).toLocaleString("en-IN")} installment` +
      ` + ₹${Number(receipt.penalty).toLocaleString("en-IN")} late fee`
    );
  }
  if (receipt.gstEnabled && receipt.gst > 0) {
    breakdown.push(`+ ₹${Number(receipt.gst).toLocaleString("en-IN")} GST`);
  }

  return (
    <div className="pm_overlay">
      <div className="pm_modal receipt_modal">

        {/* ── Receipt Content ── */}
        <div className="receipt_header">
          <div>
            <div className="receipt_company">Chit Fund Manager</div>
            <div className="receipt_tagline">Anna Nagar, Madurai · GST IN: 33AAAA0000A1Z5</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="receipt_no_label">Receipt No.</div>
            <div className="receipt_no_val">{receipt.receiptNo}</div>
            <div className="receipt_date">{receipt.date}</div>
          </div>
        </div>

        <div className="receipt_watermark">
          <div className="receipt_watermark_inner">
            <i className="bi bi-check-circle-fill" />&nbsp;PAYMENT RECEIVED
          </div>
        </div>

        <div className="receipt_body">
          <div className="receipt_section_head">Customer Details</div>
          <div className="receipt_info_grid">
            <div>
              <div className="receipt_kv_label">Name</div>
              <div className="receipt_kv_val">{receipt.customer}</div>
            </div>
            <div>
              <div className="receipt_kv_label">Customer ID</div>
              <div className="receipt_kv_val">{receipt.customerId}</div>
            </div>
            <div>
              <div className="receipt_kv_label">Phone</div>
              <div className="receipt_kv_val">{receipt.phone}</div>
            </div>
            <div>
              <div className="receipt_kv_label">Address</div>
              <div className="receipt_kv_val">{receipt.address || "—"}</div>
            </div>
          </div>

          <div className="receipt_section_head">Group Details</div>
          <div className="receipt_info_grid" style={{ marginBottom: "1rem" }}>
            <div>
              <div className="receipt_kv_label">Group Name</div>
              <div className="receipt_kv_val">{receipt.group}</div>
            </div>
            <div>
              <div className="receipt_kv_label">Chit Value</div>
              <div className="receipt_kv_val">{receipt.chitValue}</div>
            </div>
            <div>
              <div className="receipt_kv_label">Installment No.</div>
              <div className="receipt_kv_val">{receipt.installmentNo}</div>
            </div>
            <div>
              <div className="receipt_kv_label">Progress</div>
              <div className="receipt_kv_val">{receipt.installment}</div>
            </div>
          </div>

          <hr className="receipt_divider" />

          <div className="receipt_section_head">Payment Breakdown</div>

          <div className="receipt_line">
            <span className="receipt_line_label">Installment Amount</span>
            <span style={{ fontWeight: 600 }}>₹{Number(receipt.amount).toLocaleString("en-IN")}</span>
          </div>

          {receipt.penalty > 0 && (
            <div className="receipt_line">
              <span className="receipt_line_label">
                Late Fee&nbsp;
                <span style={{ fontSize: ".72rem", color: "#9ca3af" }}>
                  ({receipt.penaltyRate}%/mo · {receipt.overdueDays}d overdue)
                </span>
              </span>
              <span className="receipt_line_warn">₹{Number(receipt.penalty).toLocaleString("en-IN")}</span>
            </div>
          )}

          {receipt.gstEnabled && receipt.gst > 0 && (
            <div className="receipt_line">
              <span className="receipt_line_label">
                GST @ 18%&nbsp;
                <span style={{ fontSize: ".72rem", color: "#9ca3af" }}>(on late fee)</span>
              </span>
              <span style={{ fontWeight: 600 }}>₹{Number(receipt.gst).toLocaleString("en-IN")}</span>
            </div>
          )}

          <div className="receipt_total_row">
            <span>Total Paid</span>
            <span>₹{Number(receipt.total).toLocaleString("en-IN")}</span>
          </div>

          {breakdown.length > 0 && (
            <div style={{ fontSize: ".72rem", color: "#9ca3af", textAlign: "right", marginTop: 4 }}>
              {breakdown.join(" ")}
            </div>
          )}

          <div className="receipt_mode_row">
            <span className="receipt_mode_label">Payment Mode</span>
            <span className="receipt_mode_val">
              {receipt.mode}
              {receipt.txnRef ? ` · Ref: ${receipt.txnRef}` : ""}
            </span>
          </div>

          <div style={{ marginTop: "1rem", fontSize: ".72rem", color: "#9ca3af", textAlign: "center" }}>
            This is a computer-generated receipt and does not require a physical signature.
            <br />
            For queries contact: info@chitfund.com · +91 98765 00000
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="receipt_footer">
          <button className="btn_pdf">
            <i className="bi bi-file-earmark-pdf-fill" /> Download / Print PDF
          </button>
          <button className="btn_whatsapp">
            <i className="bi bi-whatsapp" /> Send via WhatsApp
          </button>
          <button className="btn_print ms-auto" onClick={onClose}>
            <i className="bi bi-x" /> Close
          </button>
        </div>

      </div>
    </div>
  );
};