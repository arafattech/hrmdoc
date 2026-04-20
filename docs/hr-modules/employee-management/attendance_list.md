---
    sidebar_position: 2
    description: Attendance List
---

# Attendance List

The **Attendance List** page displays all manually recorded attendance entries for employees. Each record shows the employee's check-in time, check-out time, total working hours, shift, and the date the record was created. You can add, edit, or delete attendance records directly from this page.

The list includes the following columns:

- **S/N** — Serial number
- **Employee No** — The employee's unique ID number
- **Employee Name** — The full name of the employee
- **Attendance Date** — The date the attendance was recorded
- **Check-In Time** — The time the employee checked in
- **Check-Out Time** — The time the employee checked out (empty if not yet checked out)
- **Working Hour** — Total working hours calculated from check-in to check-out (shows **Pending** if check-out has not been recorded)
- **Shift** — The shift the employee is assigned to (e.g., P/A)
- **Created On** — The date the record was created in the system
- **Actions** — Edit (pencil icon) or Delete (trash icon) the record

![Attendance List](/img/hr/employee-management/attendance/attendance-list.png)

---

## Add Attendance Record

To manually add a new attendance record, click the **New** button in the top right corner of the Attendance List page.

![Attendance Add](/img/hr/employee-management/attendance/attendance-add.png)

A dialog box will appear with the following fields:

- **Select Employee** *(required)* — Select the employee from the dropdown list.
- **Attendance Date** *(required)* — Select the date for the attendance record using the date picker.
- **Check-In Time** *(required)* — Enter the time the employee checked in (format: hh:mm am/pm).
- **Check-Out Time** — Enter the time the employee checked out (optional; leave blank if not yet checked out).

Click **Submit** to save the record. The new entry will appear in the Attendance List with the working hours calculated automatically if both check-in and check-out times are provided. If only check-in is recorded, the Working Hour column will show **Pending**.

---

## Edit Attendance Record

To edit an existing attendance record, click the **Edit (pencil) icon** in the Actions column of the record you want to update.

![Attendance Edit](/img/hr/employee-management/attendance/attendance-edit.png)

An Edit dialog will open with the existing data pre-filled:

- **Select Employee** *(required)* — The employee assigned to this record (can be changed).
- **Attendance Date** *(required)* — The date of the attendance record (can be updated).
- **Check-In Time** *(required)* — Update the check-in time if needed.
- **Check-Out Time** — Add or update the check-out time.

Click **Submit** to save your changes. The working hours will be recalculated automatically based on the updated check-in and check-out times.

---

## Delete Attendance Record

To delete an attendance record, click the **Delete (trash) icon** in the Actions column of the record you want to remove.

![Attendance Delete](/img/hr/employee-management/attendance/attendance-delete.png)

A warning dialog will appear asking:

> **Are you sure you want to delete?**

- Click **Delete** to permanently remove the attendance record.
- Click **Cancel** to go back without deleting.