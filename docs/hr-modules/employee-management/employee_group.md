---
sidebar_position: 4
description: Employee Group
---

# Employee Group

The **Employee Group** page allows administrators to create and manage groups of employees. Groups can be used to organize employees for payroll, shift assignments, or reporting purposes. The page is divided into two panels: the **Group List** on the left and the **Employee** panel on the right showing employees assigned to the selected group.

---

## Employee Group List

![Employee Group List](/img/hr/employee-management/employee-group/employee-group-list.png)

The left panel shows all existing employee groups with the following columns:

- **S/N** — Serial number
- **Custom_Id** — Auto-generated unique ID for the group (e.g., EMG-000001)
- **Name** — The name given to the group
- **Actions** — Edit (pencil icon) or Delete (trash icon) the group

Clicking on a group row will display the employees assigned to that group in the right panel.

---

## Create a New Group

![Employee Group Add](/img/hr/employee-management/employee-group/employee-group-add.png)

To create a new employee group:

1. Click the **New** button in the top right of the Group List panel.
2. A dialog box will appear with a **Group Name** field.
3. Enter a name for the group (e.g., "Night", "Production Team").
4. Click **Submit** to save the new group.

The new group will appear in the Group List with an auto-generated Custom ID.

---

## Newly Created Group — No Employees Assigned Yet

![Employee Group Name Create Or Employee assign Empty](/img/hr/employee-management/employee-group/employee-group-employee-assign.png)

When a new group is created and selected, the right panel (Employee panel) will show **"There's no data yet. When there is, you'll see it here."** This means no employees have been assigned to the group yet. Use the **Assign** button to start adding employees.

---

## Edit a Group

![Employee Group Edit](/img/hr/employee-management/employee-group/employee-group-edit.png)

To edit the name of an existing group:

1. Click the **Edit (pencil) icon** in the Actions column of the group you want to rename.
2. An Edit dialog will appear with the current **Group Name** pre-filled.
3. Update the name as needed.
4. Click **Submit** to save the changes.

---

## Full Screen Group List View

![Employee Group Full Screen](/img/hr/employee-management/employee-group/employee-group-full-screen.png)

You can expand the Group List to a full-screen table view by collapsing the right Employee panel. This view shows all groups with their **S/N**, **Custom_Id**, **Name**, and **Actions** columns in a wider, more readable layout.

---

## Delete a Group

![Employee Group Delete](/img/hr/employee-management/employee-group/employee-group-delete.png)

To delete an employee group:

1. Click the **Delete (trash) icon** in the Actions column of the group you want to remove.
2. A warning dialog will appear asking:
   > **Are you sure you want to delete?**
3. Click **Delete** to permanently remove the group.
4. Click **Cancel** to go back without deleting.

> **Note:** Deleting a group does not delete the employees — it only removes the group itself.

---

## Assign Employees to a Group

### Assigned Employee List

![Employee Group Employee Assign List](/img/hr/employee-management/employee-group/employee-group-employee-list.png)

After selecting a group from the left panel, the right **Employee** panel shows all employees currently assigned to that group. The employee list includes:

- **Active** — Whether the employee is active (✓)
- **Employee Id** — The unique ID of the employee
- **First Name** and **Last Name**
- **Designation** — The employee's job title
- **Department** — The department the employee belongs to
- **Actions** — Remove (trash icon) the employee from the group

---

### Add Employees to a Group

![Employee Group Employee Assign Add](/img/hr/employee-management/employee-group/employee-group-employee-select-assign.png)

To assign employees to a group:

1. Select a group from the left panel to view its employee panel.
2. Click the **Assign** button in the top right of the Employee panel.
3. A **Select Employee** dialog will open, listing all available employees (405 total in this example).
4. Use the **Search** field to find specific employees.
5. Check the checkbox next to each employee you want to add. You can select multiple employees at once.
6. Click **Submit** to assign the selected employees to the group.

---

### Full Screen Assigned Employee View

![Employee Group Employee Full Assign](/img/hr/employee-management/employee-group/employee-group-employee-full-screen.png)

You can expand the Employee panel to a full-screen view by collapsing the Group List panel on the left. This view shows all employees assigned to the selected group with columns for **Active**, **Employee Id**, **First Name**, **Last Name**, **Designation**, **Department**, and **Actions**.

---

## Remove an Employee from a Group

![Employee Group Employee Remove](/img/hr/employee-management/employee-group/employee-group-employee-delete.png)

To remove an employee from a group:

1. In the Employee panel, click the **Delete (trash) icon** in the Actions column of the employee you want to remove.
2. A warning dialog will appear asking:
   > **Are you sure you want to remove?**
3. Click **Remove** to unassign the employee from the group.
4. Click **Cancel** to go back without making changes.

> **Note:** Removing an employee from a group does not delete the employee's profile — it only removes them from that specific group.