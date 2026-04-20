---
sidebar_position: 2
---

# Sub Category List

The `Sub Category List` module is used to view sub-categories under specific categories, add new sub-categories, update existing ones, and delete unused records.

## Sub Category List Page

![Sub Category List](/img/basedata/category-management/subcategory/subcategory-list.png)

Go to `Base Data Management > Category Management > SubCategory List` to open this page.

### Information Shown on This Page

- **Active**: Shows whether the sub-category is active.
- **ID**: Displays the unique sub-category ID.
- **Category**: Shows the parent category of the sub-category.
- **Sub Category Name**: Displays the sub-category name.
- **Created On**: Shows the record creation date.
- **Actions**: Provides options to edit or delete the sub-category.

### Top Controls

- **Search**: Use this to find a sub-category by name or ID.
- **New**: Opens the form to add a new sub-category.
- **All**: Shows all sub-categories.
- **Active**: Shows only active sub-categories.
- **Inactive**: Shows only inactive sub-categories.

## Add a New Sub Category

![Add Sub Category](/img/basedata/category-management/subcategory/subcategory-add.png)

Follow these steps to add a new sub-category:

1. Go to `Base Data Management > Category Management > SubCategory List`.
2. Click the **New** button at the top of the page.
3. Keep the **Active** toggle on if the sub-category should remain active.
4. Select the parent category from the **Select Category** dropdown.
5. Enter the sub-category name in the **Sub Category Name** field.
6. Click **Submit** to save the record.
7. Click **Cancel** if you do not want to save.

### Field Description

- **Active**: Saves the sub-category as active or inactive.
- **Select Category**: Selects the parent category under which the sub-category will be created. This field is required.
- **Sub Category Name**: The name of the sub-category. This field is required.

## Edit a Sub Category

![Edit Sub Category](/img/basedata/category-management/subcategory/subcategory-edit.png)

Follow these steps to edit a sub-category:

1. Find the required sub-category in the list.
2. Click the **Edit** icon in the **Actions** column.
3. Change the **Active** status if needed.
4. Select a different parent category if required.
5. Update the **Sub Category Name**.
6. Click **Submit** to save the changes.
7. Click **Cancel** to discard the changes.

## Delete a Sub Category

![Delete Sub Category](/img/basedata/category-management/subcategory/subcategory-delete.png)

Follow these steps to delete a sub-category:

1. Find the sub-category you want to delete from the list.
2. Click the **Delete** icon in the **Actions** column.
3. In the confirmation popup, click **Delete** to remove the record.
4. Click **Cancel** if you do not want to continue.

:::warning
Check whether the sub-category is being used in other records before deleting it.
:::
