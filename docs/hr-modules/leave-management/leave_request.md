---
sidebar_position: 1
description: Leave Request
---

# Leave Request

The **Leave Request** module allows HR and supervisors to manage employee leave applications. It provides a comprehensive list of all leave requests and allows for detailed viewing and processing (Approval/Rejection).

![Leave Request](/img/hr/leave-management/leave-request/leave-request.png)

## Leave List Overview

The main table displays the following information for each leave request:

- **S/N**: Serial number.
- **Leave Type**: Type of leave (e.g., Medical Leave, Casual Leave).
- **Employee Name**: First and Last name of the employee.
- **Employee ID**: Unique identifier for the employee.
- **Supervisor**: The assigned supervisor for the employee.
- **Total Day(s)**: Number of days requested.
- **Supervisor Status**: Current status from the supervisor (e.g., APPROVED).
- **HR Status**: Current status from HR (e.g., APPROVED, REJECTED, PENDING).
- **Final Status**: Combined final status of the request.
- **Applied On**: The date the request was submitted.
- **Status Toggle**: Visual indicator of the current state.
- **Actions**: Contains an **Info (i)** button for detailed view.

## Viewing Request Details

To see the specifics of a leave request, click the **Info (i)** button in the **Actions** column.

![Leave Request view](/img/hr/leave-management/leave-request/leave-reques-view.png)

A **Details** popup will appear showing:
- **Leave Type**: The specific category of leave.
- **Calendar View**: Highlights the requested dates.
- **Reason**: The message or explanation provided by the employee for the leave.

## HR Approval or Rejection

HR administrators can approve or reject a leave request directly from the list when the status is pending.

![Leave Request HR Approved Or Reject](/img/hr/leave-management/leave-request/leave-request-hr-approved-reject.png)

**Steps to process a request:**
1. Locate the request with a **PENDING** HR Status.
2. Under the **Status** column, you will see two icons:
   - **Blue Checkmark (✓)**: Click to **Approve** the request.
   - **Red Cross (✕)**: Click to **Reject** the request.
3. Once processed, the **HR Status** and **Final Status** will update accordingly.

:::note
A request typically requires Supervisor approval first before HR makes the final decision.
:::