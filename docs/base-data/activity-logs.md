---
sidebar_position: 18
---

# Activity Logs
The **Activity Logs** module automatically tracks and records all user actions and system events. This provides administrators with a comprehensive audit trail to monitor changes, troubleshoot issues, and ensure system security.

## Activity Logs List
The logs list presents a tabular view of all recorded events in the system.

**How to Use the List:**
1. Navigate to the **Activity Logs** section from the sidebar menu.
2. You will see a detailed table displaying recent activities, including who performed the action, the module affected, and the exact timestamp.
3. Use the search bar or filters to easily locate specific events or trace a particular user's actions.

![Activity Logs List](/img/basedata/activity-log/activity-list.png)

## Activity Logs Core (Basic Info)
To view more information about a specific log entry, click the **View (eye)** icon in the action column. 

**Core Data View:**
- The first tab in the viewing modal is the **Core** information tab.
- This displays fundamental details of the event, such as the user's name, their IP address, the action type (e.g., Create, Update, Delete), and the targeted module.

![Activity Logs Core](/img/basedata/activity-log/activity-view-core.png)

## Activity Logs Details (Audit Trail)
For a deeper analysis of the data that was changed, use the details view.

**Audit Details:**
- Click on the **Details/Audit** tab within the viewing window.
- This section shows the precise structural changes made during the action. It highlights the before-and-after values (for updates) or the exact data payload (for creations), allowing administrators to see exactly what data was modified.

![Activity Logs Details](/img/basedata/activity-log/activity-view-audit-details.png)

## Activity Logs Delete
If necessary, administrators can remove old or irrelevant activity logs from the system.

**How to Delete a Log:**
1. From the Activity Logs list, locate the log entry you wish to remove.
2. Click the **Delete (trash)** icon in the action column.
3. A warning confirmation dialog will appear. Click **Delete** or **Confirm** to permanently erase the record. *(Note: This action is irreversible)*.

![Activity Logs Delete](/img/basedata/activity-log/activity-delete.png)
