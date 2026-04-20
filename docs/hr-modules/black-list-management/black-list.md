---
sidebar_position: 1
description: Manage and record employees who have committed offenses or serious policy violations.
---

# Black List Management

The **Black List Management** module is designed to track and restrict employees who have committed serious offenses, crimes, or major policy violations. 

:::important
When an employee is added to the **Black List**, their status is automatically set to **Inactive**, and they are immediately **blocked from logging into the employee portal**.
:::

![Black List Overview](/img/hr/black-list/black-list.png)

## Viewing the Black List

The main dashboard provides a summary of all blacklisted individuals:

- **Employee ID & Name**: Unique identification of the individual.
- **Reason**: A brief category or reason for the blacklisting (e.g., Financial, Behavioral).
- **Added by**: The admin or HR user who performed the action.
- **Status**: Visual indicator of the block (typically marked with an **X**).
- **Created On**: The date the entry was recorded.
- **Actions**: Click the **Info (ℹ️)** icon to view detailed remarks.

### Searching Entries
Use the **Search** bar at the top-right to quickly find specific employees by their name or ID.

## Adding an Employee to the Black List

To blacklist an employee:

1. Click the **+ New** button.
2. In the modal that appears:
   - **Select Employee**: Choose the employee from the searchable dropdown.
   - **Reason**: Provide a short, concise reason (e.g., "Company Policy Violation").
   - **Remark**: Use the rich text editor to provide full documentation of the incident or offense.
3. Click **Submit**.

![Add to Black List](/img/hr/black-list/black-add.png)

### Validation Errors
The system requires all fields to be populated. If any required field (Employee, Reason, or Remark) is left blank, a "This field is required" error will be displayed.

![Black List Validation Error](/img/hr/black-list/black-error-message.png)

## Viewing Black List Details

To review the full context of a blacklist entry, click the **Info (ℹ️)** icon in the Actions column. The **Details** modal will display the employee name, the categorized reason, and the complete formatted remarks recorded at the time of the incident.

![Black List View Details](/img/hr/black-list/black-view.png)
