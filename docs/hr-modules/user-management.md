---
sidebar_position: 15
---

# User Management

The **User Management** module is used to create and maintain application users, control their active state, and assign one or more roles to each user.

![User List](/img/hr/ahr/user/user-list.png)

## User List

The main table shows each user with:

- **Status** indicator in the first column
- **ID**
- **Name**
- **Email**
- **Roles**
- **Created On**
- **Actions** for edit and delete

Use the top controls to:

- Search for a user by name or email
- Create a new user with **New**
- Filter the list by **All**, **Active**, or **Inactive**

## Create User

Click **New** on the User List page to open the create dialog.

![Create User - Core Data](/img/hr/ahr/user/user-core-add.png)

The **Core Data** tab captures the user account details:

- **Active** toggle
- **Name**
- **Email**
- **Password**

Click **Submit** to save the user core data or move to the next tab.

## Assign Roles

After creating the user, open the **Roles** tab to attach roles to the account.

![Create User - Roles](/img/hr/ahr/user/user-role-add.png)

This tab shows the current role list for the user and includes:

- **Associate** to add roles
- **Submit** to save the assigned roles
- **Cancel** to close the dialog without saving

When you click **Associate**, you can select the roles that should be linked to the user.

## Edit User

Use the **Edit** icon in the Actions column to modify an existing user.

![Edit User - Core Data](/img/hr/ahr/user/user-core-edit.png)

The edit dialog opens with the user information prefilled. Update the account details in **Core Data**, then continue to the **Roles** tab if you need to change role assignment.

![Edit User - Roles](/img/hr/ahr/user/user-role-edit.png)

## Delete User

Use the **Delete** icon in the Actions column to remove a user from the system.

![Delete User](/img/hr/ahr/user/user-list-delete.png)

You will see a confirmation dialog before the delete action is applied.

:::note
User access depends on the roles assigned to the account. If a user is created without the correct role, they may not see the expected modules after login.
:::
