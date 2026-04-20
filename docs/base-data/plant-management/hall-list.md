---
sidebar_position: 2
description: Hall List
---

# Hall

The `Hall List` module is used to maintain hall records and link halls with plants. Users can create a hall, update its core information, associate plants with the hall, and delete hall records when necessary.

## Hall List

![Hall List](/img/basedata/plant-management/hall/hall-list.png)

Go to `Plant Management > Hall List` to view all hall records.

### Information Shown on This Page

- **Active**: Shows whether the hall is currently active.
- **ID**: System-generated hall ID.
- **Hall Name**: Name of the hall.
- **Created On**: Date when the hall was created.
- **Actions**: Options to edit or delete the hall.

### Top Controls

- **Search**: Quickly find a hall by name or ID.
- **New**: Opens the form to create a new hall.
- **All**: Displays all halls.
- **Active**: Displays only active halls.
- **Inactive**: Displays only inactive halls.

## Add a New Hall

### Step 1: Enter Core Data

![Hall Add](/img/basedata/plant-management/hall/hall-add.png)

When you click **New**, the form opens with the `Core Data` tab.

1. Go to `Plant Management > Hall List`.
2. Click the **New** button.
3. Keep the **Core Data** tab selected.
4. Turn on the **Active** toggle if the hall should be active.
5. Enter the hall name in the **Hall Name** field.

### Field Description

- **Active**: Enable this if the hall should remain active.
- **Hall Name**: Enter the name of the hall. This field is required.

### Step 2: Associate Plant

![Hall Add Plant List](/img/basedata/plant-management/hall/hall-add-plant-list.png)

After entering the hall information, open the `Plant` tab to associate a plant with the hall.

1. Click the **Plant** tab.
2. Review the current associated plant list if any records are shown.
3. Click **Associate** to add a plant.

![Hall Add Plant](/img/basedata/plant-management/hall/hall-add-plant-associt.png)

In the association window:

1. Use the search box if needed.
2. Select the required plant from the list.
3. Click **Associate** to attach the plant to the hall.
4. Click **Submit** in the main form to save the hall and plant association.

## Edit a Hall

### Edit Core Data

![Hall Edit](/img/basedata/plant-management/hall/hall-edit-core.png)

To update hall information:

1. Find the hall in the list.
2. Click the **Edit** icon.
3. In the `Core Data` tab, update the **Active** status or **Hall Name**.

### Edit Plant Association

![Hall Details](/img/basedata/plant-management/hall/hall-add-plant-edit.png)

To manage the associated plant:

1. Open the `Plant` tab.
2. Review the linked plant list.
3. Click **Associate** to add another plant if needed.
4. Use the delete icon in the plant list to remove an existing association.
5. Click **Submit** to save the changes.

## Delete a Hall

![Hall Delete](/img/basedata/plant-management/hall/hall-delete.png)

Follow these steps to delete a hall:

1. Locate the hall in the list.
2. Click the **Delete** icon.
3. In the confirmation popup, click **Delete**.
4. Click **Cancel** if you do not want to continue.

:::warning
Delete a hall only when you are sure it is no longer required. If it still has operational relevance, consider keeping it inactive instead.
:::
