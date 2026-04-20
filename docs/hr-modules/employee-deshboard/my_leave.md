---
sidebar_position: 2
---

# My Leave

The **My Leave** tab allows employees to manage their leaves, view approval statuses, and apply for new leaves directly from the dashboard.

## My Leave List

To view your leave list and statuses, follow these steps:

1. Navigate to the **Employee Dashboard** from the left sidebar menu.
2. Click on the **My Leave** tab from the top module navigation.
3. You will see the **Leave Lists** table displaying all your leave records.

**Features of the Leave List:**
- **Search bar:** Easily search for specific leave records.
- **Filter Options:** Filter your leaves by clicking the **All**, **Active**, or **Inactive** buttons.
- **Table Data:** Check key information including `Leave Type`, `Total Day(s)`, `Supervisor Status`, `HR Status`, `Final Status`, and `Applied On`.
- **Actions:** Use the action icons on the right side of each row to **View Details** (info icon), **Edit** (pencil icon), or **Delete** (trash icon) a leave request.

![My Leave List](/img/hr/employee-deshboard/leave-list.png)

---

## My Leave Add (Apply Leave)

To apply for a new leave request, follow these steps:

1. Click on the blue **Apply Leave** button located at the top right of the Leave Lists section.
2. A **New** leave application modal will appear on your screen.
3. **Leave Type:** Use the dropdown menu to select the type of leave you are applying for (e.g., Medical Leave). This field is mandatory (marked with `*`).
4. **Leave Date:** Select your desired leave date or date range from the interactive calendar.
5. **Reason:** Provide a description for your leave request in the rich text editor. You can use the formatting toolbar as needed. This field is mandatory (marked with `*`).
6. Click the **Submit** button to confirm and send your leave application, or click **Cancel** to abort the process.

![My Leave Add](/img/hr/employee-deshboard/leave-add.png)

---

## Important Rules for Applying Leave

### Rule 1 — One Pending Leave at a Time

![My Leave Already Pending](/img/hr/employee-deshboard/Medical-leave-already-pending.png)

If you already have a **pending** leave request of the same type (e.g., Medical Leave), you **cannot apply for another leave** of that type until your current pending request has been reviewed and approved or rejected by your Supervisor.

> **Error Message:** *"Medical Leave Request Already Pending"*

You must wait for your Supervisor to approve or reject your existing pending leave before submitting a new one.

---

### Rule 2 — Casual Leave Requires 6 Months of Service

![My Leave Join 6 Months or Casual Leave](/img/hr/employee-deshboard/employee-leave-6-month.png)

Employees are **not eligible to apply for Casual Leave** until they have completed at least **6 months of service** from their joining date.

> **Error Message:** *"You must be 6 months old to apply for casual leave"*

If you try to apply for Casual Leave before completing 6 months, the system will block the submission and display this error message. Please wait until you have completed 6 months of employment before applying for Casual Leave.

---

## View Leave Details

![My Leave View](/img/hr/employee-deshboard/employee-leave-view.png)

To view the full details of a submitted leave request, click the **Info (ⓘ) icon** in the Actions column. A read-only view of the leave application will open, showing:

- **Leave Type** — The type of leave applied for (e.g., Medical Leave)
- **Leave Date(s)** — The selected dates highlighted on the calendar
- **Reason** — The reason entered by the employee

> **Note:** The View dialog does not have a **Submit** button — only a **Cancel** button, as this is a read-only display. You can view any leave regardless of its approval status.

---

## Edit a Leave Request

![My Leave Edit](/img/hr/employee-deshboard/employee-leave-edit.png)

To edit a leave request, click the **Edit (pencil) icon** in the Actions column. You can update the Leave Type, Leave Date(s), and Reason, then click **Submit** to save the changes.

> **Important:** You can **only edit a leave request while its Supervisor Status is PENDING**. Once the Supervisor has **Approved** or **Rejected** the leave, the edit option will be disabled and the leave can no longer be modified.

---

## Delete a Leave Request

![My Leave Delete](/img/hr/employee-deshboard/employee-leave-delete.png)

To delete a leave request, click the **Delete (trash) icon** in the Actions column. A warning dialog will appear:

> **Are you sure you want to delete?**

- Click **Delete** to permanently remove the leave request.
- Click **Cancel** to go back without deleting.

> **Important:** You can **only delete a leave request while its Supervisor Status is PENDING**. Once the Supervisor has **Approved** the leave, the delete option will be disabled and the record cannot be removed. In the leave list, rows with **APPROVED** status will have their Edit and Delete icons grayed out and non-clickable.
