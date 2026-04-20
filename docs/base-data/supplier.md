---
sidebar_position: 5
description: Supplier
---

# Supplier

The `Supplier` module is used to maintain supplier records in the system. It allows users to view the supplier list, add new suppliers, update supplier information, maintain cash and bank details, and delete unused records.

## Supplier List

![Supplier List](/img/basedata/supplier/supplier-list.png)

Go to `Base Data Management > Supplier` to open the supplier list page.

### Information Shown on This Page

- **Active**: Shows whether the supplier is currently active.
- **ID**: Displays the supplier ID.
- **Name**: Displays the supplier name.
- **Created On**: Shows when the supplier record was created.
- **Actions**: Lets you edit or delete a supplier.

### Top Controls

- **Search**: Find a supplier by ID or name.
- **New**: Open the supplier entry form.
- **All**: View all supplier records.
- **Active**: View only active suppliers.
- **Inactive**: View only inactive suppliers.

## Add a New Supplier

To create a new supplier, complete the three sections below: `Core Data`, `Cash Info`, and `Bank Info`.

### Step 1: Enter Core Data

![Supplier Add Core Data](/img/basedata/supplier/supplier-add-core.png)

Follow these steps:

1. Go to `Base Data Management > Supplier`.
2. Click the **New** button.
3. Keep the **Core Data** tab selected.
4. Turn on the **Active** toggle if the supplier should be active immediately.
5. Enter the **Supplier ID**.
6. Enter the **Supplier Name**.
7. If available, enter the **Email**, **TIN**, and **BIN**.
8. Enter the primary **Contact person Name** and **Contact person Number**.
9. If needed, enter the secondary **Contact person Name(2)** and **Contact person Number(2)**.
10. Enter the **Address**.
11. Enter a **Note** if required.

### Core Data Field Description

- **Active**: Marks the supplier as active or inactive.
- **Supplier ID**: Unique identifier for the supplier. This field is required.
- **Supplier Name**: Name of the supplier. This field is required.
- **Email**: Supplier email address.
- **TIN**: Tax Identification Number.
- **BIN**: Business Identification Number.
- **Contact person Name**: Primary contact person name.
- **Contact person Number**: Primary contact number.
- **Contact person Name(2)**: Secondary contact person name.
- **Contact person Number(2)**: Secondary contact number.
- **Address**: Supplier address. This field is required.
- **Note**: Additional remarks about the supplier.

### Step 2: Add Cash Info

![Supplier Add Cash Info](/img/basedata/supplier/supplier-add-cash-info.png)

Follow these steps:

1. Open the **Cash Info** tab.
2. Click the **New** button inside the tab.
3. Select the **Payment Date**.
4. Enter the **Amount**.
5. Enter a **Note** if needed.
6. Click **Submit** to save the cash information.

### Cash Info Field Description

- **Payment Date**: Date of the supplier payment entry. This field is required.
- **Amount**: Paid amount. This field is required.
- **Note**: Additional note for the cash transaction.

### Step 3: Add Bank Info

![Supplier Add Bank Info](/img/basedata/supplier/supplier-add-bank-info.png)

Follow these steps:

1. Open the **Bank Info** tab.
2. Click the **New** button inside the tab.
3. Enter the **Bank Name**.
4. Enter the **Account Holder Name**.
5. Enter the **Account Number**.
6. Enter the **Account Type**.
7. Enter the **Branch Name**.
8. Enter the **Routing Number**.
9. Select the **Country**.
10. Enter the **Branch Address**.
11. Click **Submit** to save the bank information.
12. Click the main **Submit** button at the bottom of the supplier form to save the full supplier record.

### Bank Info Field Description

- **Bank Name**: Name of the bank. This field is required.
- **Account Holder Name**: Name of the account holder. This field is required.
- **Account Number**: Supplier bank account number. This field is required.
- **Account Type**: Type of account, such as saving or current. This field is required.
- **Branch Name**: Name of the branch. This field is required.
- **Routing Number**: Routing number for the bank branch. This field is required.
- **Country**: Country of the bank branch. This field is required.
- **Branch Address**: Address of the branch. This field is required.

## Edit a Supplier

Use the **Edit** icon from the supplier list to update an existing supplier.

### Edit Core Data

![Supplier Edit Core Data](/img/basedata/supplier/supplier-edit-core.png)

Follow these steps:

1. Find the supplier in the list.
2. Click the **Edit** icon in the **Actions** column.
3. Update the fields in the **Core Data** tab as needed.
4. Click **Submit** to save the changes.

### Edit Cash Info

![Supplier Edit Cash Info](/img/basedata/supplier/supplier-edit-cash-info.png)

Follow these steps:

1. Open the supplier in edit mode.
2. Go to the **Cash Info** tab.
3. Review the existing cash entry card.
4. Click the **Edit** icon on the cash entry you want to update.
5. Update the necessary information.
6. Click **Submit** to save the cash info changes.

### Edit Bank Info

![Supplier Edit Bank Info](/img/basedata/supplier/supplier-edit-bank-info.png)

Follow these steps:

1. Open the supplier in edit mode.
2. Go to the **Bank Info** tab.
3. Review the existing bank information card.
4. Click the **Edit** icon on the bank entry you want to update.
5. Update the necessary information.
6. Click **Submit** to save the bank info changes.

## Delete a Supplier

![Supplier Delete](/img/basedata/supplier/supplier-delete.png)

Follow these steps to delete a supplier:

1. Locate the supplier in the list.
2. Click the **Delete** icon in the **Actions** column.
3. In the confirmation popup, click **Delete** to confirm.
4. Click **Cancel** if you do not want to continue.

:::warning
Delete a supplier only when the record is no longer needed. If you want to keep the history, mark the supplier as inactive instead of deleting it.
:::
