---
sidebar_position: 1
description: Create and manage working shifts for the organization.
---

# Shift List

The **Shift List** module allows HR to define different working hours (shifts) such as Morning, Day, Evening, and Night. These shifts are then used in the Roster Management module to assign working hours to employees.

![Shift List Overview](/img/hr/shift-management/shift-list/shift-list.png)

## Viewing Shifts

The shift list table provides a quick glance at all defined work periods:

- **Active**: Indicates if the shift is currently available for use in rosters (✔️ for Active, for Inactive).
- **ID**: Unique system-generated ID for the shift.
- **Name**: User-defined name for the shift (e.g., P/A, P/B).
- **Start & End Time**: The exact timeframe the shift spans.
- **Total Working Hours**: Automatically calculated duration.
- **Color**: A unique color assigned to the shift for easy identification in the calendar/roster view.

### Filtering
You can filter shifts by **All**, **Active**, or **Inactive** status using the toggle buttons at the top-right.

## Adding a New Shift

To create a new shift:

1. Click the **+ New** button.
2. In the modal that appears:
   - **Active Toggle**: Keep enabled to make the shift usable immediately.
   - **Night Toggle**: Enable if the shift spans past midnight.
   - **Name**: Enter a descriptive name.
   - **Start & End Time**: Select the hours using the clock picker.
   - **Color**: Select a distinct color to represent this shift.
3. Click **Submit**.

![Add Shift](/img/hr/shift-management/shift-list/shift-add.png)

## Editing a Shift

To modify an existing shift (e.g., changing times or color), click the **Edit (🖊️)** icon in the Actions column.

![Edit Shift](/img/hr/shift-management/shift-list/shift-edit.png)

### Re-activating Inactive Shifts
To re-activate a shift that was previously disabled:
1. Filter the list by **Inactive**.
2. Click the **Edit** icon.
3. Toggle the **Active** switch to enabled.
4. Click **Submit**.

![Inactive to Edit Active](/img/hr/shift-management/shift-list/shift-inactive-to-edit-active-list.png)

## Deleting a Shift

If a shift is no longer needed, click the **Delete** icon. A confirmation warning will appear to prevent accidental deletion.

![Delete Shift](/img/hr/shift-management/shift-list/shift-delete.png)

:::warning
Deleting a shift may affect historical roster data. If the shift was used in the past, consider making it **Inactive** instead of deleting it.
:::
