---
sidebar_position: 1
description: Operation Lists
---

# Operation Lists

The **Operation Lists** page is used to maintain operation master data. From this page, users can create operations, update existing records, review inactive records, and manage operation positions inside each operation.

## How to Access

1. Open **Base Data Management** from the left menu.
2. Expand **Operation Management**.
3. Click **Operation Lists**.

![Operation Lists](/img/basedata/operation/operation-list.png)

## Operation List Page

The list page shows all created operations in a table. Each row contains:

- **Active**: Shows whether the operation is active or inactive.
- **ID**: System-generated operation ID.
- **Operations Name**: Name of the operation.
- **Cycle Time**: Target cycle time for the operation.
- **Item Name**: Product linked to the operation.
- **Created On**: Record creation date.
- **Actions**: Edit, delete, and details options.

You can also use these controls from the top-right area:

- **Search**: Find a specific operation quickly.
- **New**: Create a new operation.
- **All**: Show all records.
- **Active**: Show only active operations.
- **Inactive**: Show only inactive operations.

## Create a New Operation

To add a new operation:

1. Open the **Operation Lists** page.
2. Click **New**.
3. In the form, set the **Active** toggle if the record should be available for use immediately.
4. Enter the **Operation Name**.
5. Enter the **Target Cycle Time**.
6. Select the related **Product** from the dropdown list.
7. Click **Submit** to save the record.
8. Click **Cancel** if you want to close the form without saving.

![Operation Lists Add](/img/basedata/operation/operation-add.png)

## Edit an Operation

To update an existing operation:

1. Find the required operation from the list.
2. Click the **Edit** icon in the **Actions** column.
3. Update the necessary information.
4. If needed, turn the **Active** switch on or off.
5. Click **Submit** to save the changes.

![Operation Lists Edit](/img/basedata/operation/operation-edit.png)

## Delete an Operation

To remove an operation:

1. Locate the record in the list.
2. Click the **Delete** icon.
3. A confirmation message will appear.
4. Click **Delete** to confirm or **Cancel** to stop the action.

Use delete carefully, because this action removes the selected record from the list.

![Operation Lists Delete](/img/basedata/operation/operation-delete.png)

## View Inactive Operations

If you need to review operations that are not currently active:

1. Click the **Inactive** button at the top of the list.
2. The table will display only inactive records.
3. Use the **Edit** option if you need to reactivate or update a record.

![Operation Lists Inactive](/img/basedata/operation/operation-inactive.png)

## View Operation Details

Click the **Details** icon from the **Actions** column to open the operation details page.

The details page shows the main operation information, including:

- Custom ID
- Operation Name
- Operation Cycle

Below that, the page displays the **Operations Positions** section. This section is used to manage the individual positions or steps linked to the selected operation.

![Operation view Details](/img/basedata/operation/operation-view-details.png)

## Manage Operation Positions

Inside the **Operation Details** page, the **Operations Positions** table includes:

- **Active** status
- **ID**
- **Name**
- **Item Name**
- **Machine Name**
- **Created On**
- **Actions**

From this section, users can:

- Search positions
- View active or inactive position records
- Create a new position
- Edit an existing position
- Delete a position

When creating or editing a position, the user needs to provide:

- **Operation Position Name**
- **Product**
- **Machine**
- **Active** status

## Edit an Operation Position

To edit an operation position:

1. Open the parent operation details page.
2. In the **Operations Positions** table, click the **Edit** icon.
3. Update the required fields.
4. Click **Submit** to save the changes.

![Operation view Details Edit](/img/basedata/operation/operation-view-details-edit.png)

## Delete an Operation Position

To delete an operation position:

1. Open the operation details page.
2. In the **Operations Positions** table, click the **Delete** icon.
3. Confirm the message by clicking **Delete**.
4. Click **Cancel** if you do not want to continue.

![Operation view Details Delete](/img/basedata/operation/operation-view-details-delete.png)

