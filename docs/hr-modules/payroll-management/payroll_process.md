---
sidebar_position: 1
description: Payroll Process
---

# Payroll Process

The **Payroll Process** module allows HR administrators to review employee details, check salary breakdowns, and generate payroll for one or multiple employees at once. The page is divided into two panels — the **Employee List** on the left and the **Employee Details** panel on the right.

![Payroll Process](/img/hr/payroll-management/payroll-process/payroll-process-list.png)

## Overview Tab

When you click on any employee from the list, their details appear on the right panel under the **Overview** tab. This tab shows three sections:

- **Basic Information** — Employee's Full Name, Employee ID, Job Title, Department, Supervisor, and Joining Date.
- **Payroll Snapshot** — Current Salary, Last Paid date, and Next Payroll date.
- **Attendance & Leave** — Current attendance count, leaves taken, leave balance, night shifts, total payroll days, and total weekends.

> Use this tab to quickly verify an employee's salary and attendance status before generating payroll.

## Payroll Log Tab

Click the **Payroll Log** tab on the right panel to see the full salary breakdown for the selected employee.

![Payroll Process Payroll Log](/img/hr/payroll-management/payroll-process/payroll-process-log.png)

The Payroll Log shows the following earnings and deductions:

| Earnings              | Deductions          |
|-----------------------|---------------------|
| Basic Salary          | Tax                 |
| House Rent Allowance  | Social Security     |
| Medical Allowance     | Others Deduction    |
| Transport Allowance   | Penalties           |
| Other Allowance       |                     |
| Attendance Bonus      |                     |
| Night Shift Bonus     |                     |
| **Total Salary**      |                     |

> This tab gives a full picture of what an employee earns and what will be deducted from their salary.

## Activity Log Tab

Click the **Activity Log** tab to view the employee's leave activity for the previous month.

![Payroll Process Activity Log](/img/hr/payroll-management/payroll-process/payroll-process-activity-log.png)

This tab shows:
- **Casual Leave** — Total available days and how many were taken.
- **Medical Leave** — Total available days and how many were taken.

> Use this tab to check if leave balances are correct before processing payroll.

## Filter by Department

You can filter the employee list by department using the **Select Department** dropdown at the top.

![Payroll Process Department Filter](/img/hr/payroll-management/payroll-process/payroll-process-activity-department-filter.png)

**Steps to filter by department:**
1. Click the **Select Department** dropdown at the top-left of the employee list.
2. Check one or more department names from the list (e.g., **Hr**, Admin, Store, etc.).
3. The employee list will update automatically to show only employees from the selected department(s).
4. To remove a department filter, click the **✕** next to the department name in the dropdown.

## Filter by Date Range

You can also filter the employee list by a specific payroll date range.

![Payroll Process Date Range Filter](/img/hr/payroll-management/payroll-process/payroll-process-daterance.png)

**Steps to set a date range:**
1. Click the **calendar icon** next to the date range field at the top.
2. A calendar picker will appear. Select the **start date** and **end date** for the payroll period.
3. Click **Reset** if you want to go back to the default date range.

## Generate Payslip

After selecting your employees and verifying their details, you can generate payroll.

![Payroll Process Generate Payslip](/img/hr/payroll-management/payroll-process/payroll-process-activity-genarate.png)

**Steps to generate payroll:**
1. From the employee list, check the **checkbox** next to the employee(s) you want to include.
   - You can select all employees using the checkbox in the header row.
   - You can also filter by department first, then select all employees in that department.
2. Click the **Generate** button at the bottom-right of the page.
3. A confirmation dialog will appear:
   > *"Are you sure you want to generate payroll? Once generated, it cannot be modified."*
4. Click **Confirm** to proceed, or **Close** to cancel.

:::warning
Once payroll is generated, **it cannot be modified**. Please double-check employee selection and date range before confirming.
:::

## Payroll Generated Successfully

After confirming, the payroll will be processed and the **Payroll Status** column will update to show a green checkmark for all successfully generated employees.

![Payroll Process Generate Success](/img/hr/payroll-management/payroll-process/payroll-process-activity-genarate-success.png)

You can verify the generation was successful by checking that:
- The **Payroll...** column now shows a green checkmark icon for selected employees.
- The **Generate** button changes back to its default (greyed-out) state, indicating the process is complete.

## Reset Button

If you want to clear all applied filters (department and date range) and go back to the default view, click the **Reset** button at the top-right of the filter area.

![Payroll Process Reset Button](/img/hr/payroll-management/payroll-process/payroll-process-resetbtn.png)

**What Reset does:**
- Clears any selected department filter.
- Resets the date range to the default payroll period.
- Reloads the full employee list.