---
sidebar_position: 1
description: Client List
---

# Client

The `Client List` module is used to maintain customer or client master data in the system. From this page, users can review existing clients, create new records, update client information, and remove clients that are no longer needed.

## Client List

![Client List](/img/basedata/client-management/client/client-list.png)

Go to `Client Management > Client List` to view all client records.

### Information Shown on This Page

- **Active**: Shows whether the client is currently active.
- **ID**: System-generated client ID.
- **Client Name**: Name of the client.
- **Created On**: Date when the client record was created.
- **Actions**: Options to edit or delete the client.

### Top Controls

- **Search**: Finds a client quickly by name or ID.
- **New**: Opens the client entry form.
- **All**: Displays all client records.
- **Active**: Displays only active clients.
- **Inactive**: Displays only inactive clients.

:::info
Before creating a client, it is a good practice to create the required `Client Note` and `Client Area` first so they are available in the client form dropdowns.
:::

## Add a New Client Core

![Client Add](/img/basedata/client-management/client/client-add-core.png)

Follow these steps to create a new client from the `Core Data` tab:

1. Go to `Client Management > Client List`.
2. Click **New**.
3. Keep the **Core Data** tab selected.
4. Turn on the **Active** toggle if the client should be usable immediately.
5. Enter the **Client Name**.
6. Enter the **Email**.
7. Enter the primary **Contact person Name**.
8. Enter the primary **Contact person Number**.
9. Enter **TIN** if available.
10. Enter **BIN** if available.
11. Select a value from **Select Note**.
12. Select a value from **Select Area**.
13. Click **Submit** to save the client.

### Core Data Field Description

- **Active**: Enables or disables the client for active use.
- **Client Name**: Main client name. This field is required.
- **Email**: Client email address. This field is required.
- **Contact person Name**: Primary contact person for the client.
- **Contact person Number**: Phone or mobile number of the primary contact.
- **TIN**: Tax Identification Number, if applicable.
- **BIN**: Business Identification Number, if applicable.
- **Select Note**: Assigns a predefined client note or category.
- **Select Area**: Assigns the client to a predefined area.
- **Add More**: Opens additional contact fields for a second contact person.

## Add a New Client Address

![Client Add Address](/img/basedata/client-management/client/client-add-address.png)

If address information is required, open the `Address` tab and complete the following:

1. Enter the main **Address**.
2. Enter the **Bill To** address.
3. If the shipping address is the same as the billing address, turn on **Ship to Same as Bill To** when available.
4. Enter the **Ship To** address if it is different.
5. Click **Submit** to save the client record.

### Address Field Description

- **Address**: Main office or business address of the client.
- **Bill To**: Billing address used for invoicing.
- **Ship To**: Shipping or delivery address.
- **Ship to Same as Bill To**: Copies billing and shipping address information when both are the same.

## Edit a Client Core

![Client Edit](/img/basedata/client-management/client/client-edit-core.png)

Follow these steps to update client core information:

1. Find the client in the list.
2. Click the **Edit** icon in the relevant row.
3. In the `Core Data` tab, update the required information.
4. Click **Submit** to save the changes.

## Edit a Client Address

![Client Edit Address](/img/basedata/client-management/client/client-edit-address.png)

To update address information:

1. Open the client by clicking the **Edit** icon.
2. Select the `Address` tab.
3. Update **Address**, **Bill To**, or **Ship To** as needed.
4. Click **Submit**.

## Show More Emargency Contact

![Client Show More Emargency Contact](/img/basedata/client-management/client/client-edit-core-emargency.png)

Use **Add More** when you need to keep a secondary client contact.

### Additional Contact Details

- **Contact person Name(2)**: Name of the secondary contact person.
- **Contact person Number(2)**: Phone or mobile number of the secondary contact.
- **Show Less**: Hides the additional contact section when it is no longer needed.

## Delete a Client

![Client Delete](/img/basedata/client-management/client/client-delete.png)

Follow these steps to delete a client:

1. Locate the client in the list.
2. Click the **Delete** icon.
3. In the warning dialog, click **Delete** to confirm.
4. Click **Cancel** if you do not want to continue.

:::warning
Delete a client only when the record is no longer required. If the client may be used again later, keep the record and mark it inactive instead.
:::
