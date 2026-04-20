---
sidebar_position: 1
---

# Category List

The `Category List` module is used to view all item categories in the system, create new categories, update existing categories, and delete unused categories.

## Category List Page

![Category List](/img/basedata/category-management/category/category-list.png)

Go to `Base Data Management > Category Management > Category List` to open this page.

### Information Shown on This Page

- **Active**: Shows whether the category is active.
- **ID**: Displays the unique category ID.
- **Name**: Displays the category name.
- **Prefix**: Displays the short category prefix.
- **Created On**: Shows the record creation date.
- **Actions**: Provides options to edit or delete the category.

### Top Controls

- **Search**: Use this to find a category by name or ID.
- **New**: Opens the form to add a new category.
- **All**: Shows all categories.
- **Active**: Shows only active categories.
- **Inactive**: Shows only inactive categories.

## Add a New Category

![Add Category](/img/basedata/category-management/category/category-list-add.png)

Follow these steps to add a new category:

1. Go to `Base Data Management > Category Management > Category List`.
2. Click the **New** button at the top of the page.
3. Keep the **Active** toggle on if the category should remain active.
4. Enter the category name in the **Category Name** field.
5. Enter a short prefix in the **Category Prefix** field.
6. Click **Submit** to save the category.
7. Click **Cancel** if you do not want to save.

### Field Description

- **Active**: Saves the category as active or inactive.
- **Category Name**: The main name of the category. This field is required.
- **Category Prefix**: A short code or prefix for the category.

## Edit a Category

![Edit Category](/img/basedata/category-management/category/category-list-edit.png)

Follow these steps to edit an existing category:

1. Find the required category in the list.
2. Click the **Edit** icon in the **Actions** column.
3. Update **Active**, **Category Name**, or **Category Prefix** as needed.
4. Click **Submit** to save the changes.
5. Click **Cancel** to discard the changes.

## Delete a Category

![Delete Category](/img/basedata/category-management/category/category-delete.png)

Follow these steps to delete a category:

1. Find the category you want to delete from the list.
2. Click the **Delete** icon in the **Actions** column.
3. In the confirmation popup, click **Delete** to remove the record.
4. Click **Cancel** if you do not want to continue.

:::warning
If a category may be needed later, it is safer to mark it as `Inactive` instead of deleting it.
:::
