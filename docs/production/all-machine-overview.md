---
sidebar_position: 1
description: Machine Overview
---

# Machine Overview

The `Machine Overview` page is the main production monitoring dashboard. It shows the current condition of all connected production and utility machines in one place so users can understand which machines are producing, which are waiting, and which are turned off.

![matchines-overview](/img/production/all-matchines-overview.png)

Go to `Production > All Machines` to open the full production dashboard.

## What This Page Shows

- **Overall Efficiency**: Summary efficiency value for all monitored machines.
- **Active Machines**: Machines that are currently in production.
- **Idle Machines**: Machines that are powered on but not producing.
- **Inactive Machines**: Machines that are powered off.
- **Under Maintenance**: Machines currently marked under maintenance.

## Machine Status Meaning

- **Active / In Production**: The machine is running and production is happening.
- **Idle**: The machine is on, but it is not giving production.
- **Inactive**: The machine is off.

:::info
Use the status counters at the top of the dashboard for a quick production summary before checking individual machines.
:::

## Machine Overview Card

![all-matchines-Data-card](/img/production/all-matchines-Data-card.png)

The `Card` view shows machine information in larger cards. This layout is useful when users want to review one machine at a time with better visual spacing.

### Information Available in Card View

- **Machine Name**: Name of the machine.
- **Status Badge**: Shows whether the machine is `Active`, `Idle`, or `Inactive`.
- **Temperature**: Current temperature reading.
- **Load**: Current machine load.
- **Uptime**: Total running time shown on the card.
- **Load Bar**: Visual indicator of machine load.

### When to Use Card View

- When you want to review machines one by one.
- When you need a clearer, larger view of machine condition.
- When the number of machines in the selected section is small.

## Machine Overview Compact

The `Compact` view shows the same machine data in a tighter layout so more machines can be seen at once.

### When to Use Compact View

- When you need to monitor many machines on one screen.
- When you want a quick comparison between multiple machines.
- When you are checking status changes across a full production area.

## Machine Overview FullScreen

![all-matchines-Data-fullscreen](/img/production/all-matchines-Data-fullscreen.png)

The `Full Screen` option expands the dashboard area and is useful for large-screen monitoring. In this mode, users can focus on machine cards without the normal page layout taking extra space.

### Full Screen Use Case

- Use it in the production office or display board.
- Use it during shift monitoring for easier visibility.
- Use it when you want to monitor individual machine cards with fewer distractions.

:::note
In the full-screen layout, users can review individual machine details more comfortably, especially in `Card` and `Compact` mode.
:::

## Individual Machine Details

When a machine card is opened, the system shows a detailed machine dashboard. This detailed view helps users understand the current running condition and recent performance of one selected machine.

### Main Sections in Machine Details

- **Status Panel**: Shows whether the machine is in production, idle, or inactive.
- **Uptime / Idle Time**: Displays how long the machine has run or stayed idle.
- **Machine Info**: Shows machine ID and machine name.
- **Configs**: Shows configured limits such as maximum RPM, minimum RPM, maximum temperature, and minimum temperature.
- **Recent Activity**: Chart comparing active, idle, and inactive hours by day.
- **Runtime**: Graph of machine runtime against the daily target.
- **Quality & Efficiency**: Performance metrics such as product availability, machine performance, quality, and machine efficiency.
- **Production Overview**: Summary blocks such as production target, machine status count, production achieved, and wastage.
- **Machine Board / Configuration**: Quick navigation buttons for related screens.

## Machine Details Idle

![machine-details-inactive](/img/production/machine-details-idle.png)

In the `Idle` state, the machine is switched on but not producing output. The detail screen highlights the machine as idle and shows idle time information so users can identify waiting time or stoppage conditions.

### What to Check in Idle State

- Whether the machine is still powered on.
- How long it has remained idle.
- Whether load and uptime are updating.
- Whether the machine should return to production or needs operator attention.

## Machine Details Active

![machine-details-active](/img/production/machine-details-active.png)

In the `Active` state, the machine is currently producing. This is the normal operating condition for production monitoring.

### What to Check in Active State

- Current uptime.
- Temperature and load values.
- Quality and efficiency metrics.
- Daily and monthly production progress.

## Machine Details Inactive

![machine-details-active](/img/production/machine-details-inactive.png)

In the `Inactive` state, the machine is off. The detail screen still shows the machine configuration and historical charts, but the machine is not currently producing.

### What to Check in Inactive State

- Whether the machine is intentionally stopped.
- Whether it should be restarted for production.
- Whether the machine is waiting for maintenance or operator action.

## How Users Normally Work on This Page

1. Open `Production > All Machines`.
2. Review the top summary counters.
3. Select `Card`, `Compact`, or `Full Screen` depending on the monitoring need.
4. Use the left-side process menu to switch between production sections.
5. Open individual machine details when deeper analysis is required.
