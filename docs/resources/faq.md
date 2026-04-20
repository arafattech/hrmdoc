---
sidebar_position: 2
---

# FAQ (Frequently Asked Questions)

Find answers to common questions about the MES project, its modules, system usage, and documentation.

## General Project Questions

### What is the MES project?
MES is a web-based Manufacturing Execution System designed to centralize factory and business operations in one platform. It connects production monitoring, base data, store management, purchase, sales, HR, QA & QC, and task-related workflows.

### Who is this project for?
This system is designed for manufacturing companies, factories, and industrial organizations that need a single platform to manage operational data, monitor production, and improve decision-making.

### What problem does the system solve?
The system reduces manual record keeping, improves data consistency between departments, provides real-time production visibility, and helps users access reports and operational information more quickly.

### Is this project an ERP or an MES?
The project is positioned as an MES, but it also includes broader business management features that are commonly found in ERP systems. In practice, it works as a centralized factory operations platform.

### Is the system web-based?
Yes. The system is designed to run in a web browser, which allows users to access it from connected devices without requiring a separate desktop application.

## Login & Account

### How do I log in to the system?
To log in, enter your registered **Email Address** or **Phone number** and **Password** on the login page, then click the **Login** button.

### Can I keep my session active so I don't have to log in repeatedly?
Yes, you can check the **Remember Me** box on the login page before clicking login to stay signed in.

### What should I do if I forget my password?
Since there is currently no "Forgot Password" link on the login page, please contact your system administrator to have your password reset.

### Why can I not see some menus after logging in?
Menu visibility depends on user role and permissions. If a menu or action is missing, your account may not have access to that module or feature.

### Can multiple users use the system at the same time?
Yes. The platform is intended for multiple departments and users working at the same time with role-based access control.

## Dashboard & Navigation

### What are the main modules available in the MES system?
The system is organized into several key modules accessible from the dashboard:
*   **Base Data Management**: Manage core information like items, suppliers, and employees.
*   **Production**: Monitor and manage production processes.
*   **Purchase**: Handle procurement and vendor orders.
*   **Store Management**: manage inventory and warehouse operations.
*   **QA & QC**: Quality Assurance and Quality Control tracking.
*   **Task Management**: Assign and track internal tasks.
*   **HR Management**: Manage human resources and personnel data.
*   **Sales & Marketing**: Track sales analytics and marketing activities.

### Where should a new user start?
Most new users should start with the dashboard and then open the module related to their work area. For example, production users should go to `Production`, store users should go to `Store Management`, and administrators should review `Base Data Management` first.

### How do I change the application theme or display density?
Click on the **Settings** (gear icon) in the top right corner of the dashboard. From there, you can select a theme (e.g., Obsidian Black, Classic Dark, Classic Glow) and adjust the content density to **Cozy** or **Compact**.

### Where can I find system notifications and activity logs?
Click on the **Notifications** (bell icon) in the top right corner to view the latest system activities, updates, and alerts.

### How do I logout of the system?
Click on your **User Profile** (avatar icon) in the top right corner of the screen and select the **Logout** option.

## Modules & Functional Coverage

### What can I do in Base Data Management?
Base Data Management is used to maintain the master records required by other modules. This includes items, suppliers, employees, departments, plant information, machines, storage locations, client data, and user-related setup records.

### What can I do in the Production module?
The Production module is used to monitor machine condition and production status. Users can review machine dashboards, see whether machines are active, idle, or inactive, and switch between `Card`, `Compact`, and `Full Screen` monitoring views.

### What does `Active`, `Idle`, and `Inactive` mean in Production?
- **Active**: The machine is currently in production.
- **Idle**: The machine is on, but it is not giving production.
- **Inactive**: The machine is off.

### Can I see individual machine details in Production?
Yes. The production dashboard supports detailed machine views where users can review status, uptime, idle time, machine info, configuration values, recent activity, runtime graphs, and quality and efficiency indicators.

### What is the purpose of the Store Management module?
Store Management is intended for stock control, inventory tracking, warehouse operations, and material movement between storage locations or departments.

### What is the purpose of the Purchase module?
The Purchase module is intended for procurement workflows such as vendor handling, purchase planning, purchase orders, and receiving-related activities.

### What is included in the Sales & Marketing module?
The Sales & Marketing section includes sales dashboards, analytics, sales orders, pricing plans, request tracking, audit trail features, and market-related monitoring.

### What is the purpose of the HR module?
The HR module is intended to manage employee information, attendance, payroll, and related workforce records.

### What HR features are currently covered in the documentation?
The HR documentation currently includes areas such as analytics, employee management, attendance, leave management, payroll, shift and roster management, notices, designations, employee types, employee sections, blacklist management, assets, and employee dashboard functions.

### What is the purpose of QA & QC?
QA & QC is intended to support inspection, quality assurance, quality control, and compliance-related workflows for production and business operations.

### What is the purpose of Task Management?
Task Management is intended to support team coordination by allowing users to assign tasks, monitor progress, and manage work activities.

## HR Module FAQ

### What can users do in HR Analytics?
The HR Analytics dashboard gives management and HR users a visual summary of workforce data. It includes key metrics such as total employees, present employees, absent employees, employees on leave, payroll analysis, attendance trends, asset analysis, leave request analysis, and employee group analysis.

### Can HR Analytics be filtered?
Yes. The analytics dashboard supports filtering by date range and department so users can review HR performance for a specific period or team.

### What is the purpose of the Employee List page?
The Employee List page is used to manage employee master records. Users can review employee details, create new employee records, edit existing records, and activate or deactivate employees when needed.

### What employee information can be stored in HR?
The HR module can store core employee data, personal data, salary details, bank information, assigned assets, attachments, supervisor information, department, designation, employee type, and leave summary details.

### Can employees be activated or deactivated from HR?
Yes. Employee status can be changed from the employee record, and the employee list also supports selected employee actions to quickly mark employees as active or inactive.

### What is shown on the Daily Attendance page?
The Daily Attendance page shows a card-based attendance view for a selected date and shift. It displays employee name, employee ID, shift, check-in time, check-out time, working hours, and whether the employee is present or absent.

### Can attendance be filtered by shift, department, date, or employee?
Yes. The Daily Attendance page supports filtering by shift, date, department, and employee name or ID. Users can also switch between `All`, `Present`, and `Absent` views.

### What is the purpose of Leave Request management?
The Leave Request module is used by HR and supervisors to review leave applications, check request details, and approve or reject requests based on workflow and authority.

### Can HR approve or reject leave requests directly?
Yes. If the request is pending for HR action, HR can approve or reject it directly from the leave request list. The documentation notes that supervisor approval generally comes first.

### What can users do in Payroll?
The Payroll module allows HR users to review processed payroll records, check payroll summaries, open payroll details for individual employees, filter payroll by date range, search payroll records, and download payslips.

### What payroll information is available in the system?
Payroll details can include payable days, payroll period, process date, basic salary, allowances, night shift bonus, attendance bonus, deductions, net salary, payment status, and HR notes.

### Can users download payroll documents?
Yes. The payroll documentation shows that users can download individual payslips and may also download payroll records in bulk from the list page.

### What is Roster Management used for?
Roster Management is used to plan employee shifts, assign staff to schedules, filter the roster by department or date, and make manual shift changes when required.

### Can HR make manual shift changes after roster planning?
Yes. The roster module supports override actions such as `Add to This Shift`, `Swap`, and `Replace`. These changes are tracked for audit and payroll verification.

### What is the purpose of Notices Management?
The Notices module is used to create and publish organizational notices for all employees, selected departments, or individual employees. It also supports draft management and acknowledgement tracking.

### Can notices be saved as drafts before publishing?
Yes. Notices can be saved as drafts, edited later, published when ready, or deleted if no longer needed.

### Can HR target notices to specific groups of employees?
Yes. Notices can be sent to all employees, selected departments, or individual employees, depending on the message requirement.

## Roles, Permissions, and Security

### Does every user have the same access?
No. The system supports role-based access. Admin users usually have wider access, while department users only see the modules and actions relevant to their responsibilities.

### Why is role management important in this project?
Role management helps protect sensitive data, reduces the chance of incorrect changes, and ensures users only work within the parts of the system they are authorized to use.

### Is the system designed with security in mind?
Yes. The project overview describes secure authentication, role-based access, input validation, and common web protection practices such as CSRF, XSS, and SQL injection prevention.

## Reports, Data, and Operations

### Can the system help management make decisions?
Yes. One of the main goals of the system is to provide centralized and real-time operational data so managers can make decisions faster using production status, sales information, inventory data, and other reports.

### Does the system support real-time monitoring?
Yes. The production dashboard is designed for real-time machine monitoring, and other modules are intended to maintain up-to-date operational records.

### Can users export reports?
According to the project overview, the system is designed to support report generation in formats such as PDF and Excel, depending on the module and implementation status.

### Is the data centralized across departments?
Yes. A core objective of the project is to keep data centralized so different departments can work from the same source of truth.

## Documentation Questions

### Is all module documentation complete?
No. Some documentation sections are complete or partially complete, while some modules still show `Coming Soon`. This means documentation is being added gradually.

### Which sections currently have more detailed documentation?
At the moment, `Base Data Management`, `Production`, parts of `Sales & Marketing`, and `Resources` contain more visible documentation content than some other sections.

### What should I do if the documentation for a module is not available yet?
If a page is marked `Coming Soon`, contact the project team, administrator, or documentation owner for clarification until that section is fully documented.

### What is included in the Resources section?
The `Resources` section contains supporting materials such as the project overview, setup guide, and FAQ content for common project-level questions.

## Support & Troubleshooting

### What should I do if I see wrong data or unexpected machine status?
First, refresh the page and confirm you are in the correct module or machine section. If the issue continues, report it to the responsible supervisor, system admin, or technical support team with screenshots and the relevant machine or module name.

### What should I do if a machine is shown as idle for too long?
An idle machine means it is on but not producing. In that case, users should review the machine details, confirm whether the stoppage is expected, and inform the responsible production team if follow-up action is required.

### What should I do if I cannot perform an action that other users can do?
This usually means your role does not have the required permission. Contact the system administrator to review your access rights.

### Who should maintain this FAQ section?
This FAQ should be maintained by the project owner, documentation team, or system administrator whenever new modules, workflows, or common support questions are identified.
