---
sidebar_position: 2
description: Visualize and manage work schedules across shifts.
---

# Roster Management

**Roster Management** is the central hub for scheduling and tracking employee shifts. This module allows HR to visualize daily assignments, plan rosters in bulk, and handle real-time shift changes.

![Roster Management Overview](/img/hr/shift-management/roster/roster-overview.png)

## Navigation and Dashboard Filters

The top navigation bar provides powerful tools to filter and navigate the roster.

- **Department Selection**: Filter the roster by specific departments (e.g., "QC", "Production").
- **Month & Date Picker**: Select the specific period you wish to view. Use the left/right arrows to quickly jump between days.
- **Individual Filter**: You can search for a specific employee to see only their assigned shift for that day.
- **Reset Button**: Click **Reset** to clear all active filters and return to the default overview.

![Roster Dashboard Filters](/img/hr/shift-management/roster/roster-select-individual-employee.png)

![Reset Roster Filters](/img/hr/shift-management/roster/roster-reset-btn.png)

## Planning a New Roster

When a date has no planned roster, the dashboard will display empty shift containers with a "Drop employee here" message.

![Empty Roster View](/img/hr/shift-management/roster/roster-select-date-roster-empty.png)

### Steps to Create a Roster Plan
To generate schedules for multiple employees and dates:

1. Click the **+ New** button at the top-right.
2. In the **Roster Planning** modal, select the desired **Date Range**.

![Date Range Selection](/img/hr/shift-management/roster/roster-date-range.png)

3. **Assigning by Group**:
    - Choose a shift tab (Night, Day, Evening, Morning).
    - Select an employee **Group** (e.g., "Group-A").
    - The system will automatically list all employees in that group for the selected shift.

![Assigning by Group](/img/hr/shift-management/roster/roster-date-range-group.png)

![Group Employee List](/img/hr/shift-management/roster/roster-date-range-group-employee-assign.png)

4. **Assigning Individually**:
    - You can search and select specific employees if they are not part of a pre-defined group.

![Individual Selection](/img/hr/shift-management/roster/roster-new-btn.png)

5. **Submitting the Plan**:
    - Once all shifts are populated, click **Submit**. The system will save the entries across all days in your selected date range.

![Submitting Roster Plan](/img/hr/shift-management/roster/roster-employee-select-save.png)

## Real-Time Shift Overrides

After a roster is published, HR can still make manual adjustments to account for absences or sudden workload changes.

### Override Actions
Clicking an employee card or a slot allows you to perform three types of overrides:

- **+ Add to This Shift**: Assign an additional person to a shift without removing anyone else.
- **Swap**: Exchange shifts between two employees (e.g., Morning shift employee swaps with Night shift).
- **Replace**: Remove one employee and put another in their place.

![Manual Override Options](/img/hr/shift-management/roster/roster-assign-employee.png)

### Status Indicators
On the main dashboard, manual overrides are visually flagged for easy identification:
- **EXTRA**: Manually added staff.
- **SWAP**: Swapped shift entry.
- **REPLACEMENT**: Replaced a scheduled employee.

![Override Status Indicators](/img/hr/shift-management/roster/roster-overview.png)

:::info
All overrides are tracked in the [Shift Overrides Log](./shift-overrides-log.md) for transparent auditing and payroll verification.
:::