# Trailhead-LWC
A repo containing the code concerning to a bunch of modules related to LWC from trailhead. Find them in this [trailmix](https://trailhead.salesforce.com/users/milopez/trailmixes/trailhead-lwc).

## Table of contents

- [Trailhead-LWC](#trailhead-lwc)
  - [Table of contents](#table-of-contents)
  - [Change List](#change-list)
  - [Installation instructions](#installation-instructions)
    - [SFDX](#sfdx)
- [Deployment Tasks](#deployment-tasks)
  - [Pre-installation](#pre-installation)
  - [Post-installation](#post-installation)
- [Resources](#resources)

## Change List

| Metadata Entity | Object                                 | Change Type | Details |
|-----------------|----------------------------------------|-------------|---------|
| App             | Trailhead LWC                          | Create      |         |
| Tab             | Welcome                                | Create      |         |
| PermissionSet   | trailheadlwc                           | Create      | Allow access to the Trailhead LWC App        |
| AuraComponent   | welcome                                | Create      |         |
| LWC             | heloWorld                              | Create      |         |
| AuraComponent   | AccountLocator                         | Create      |         |
| AuraComponent   | AccountList                            | Create      |         |
| AuraComponent   | AccountMap                             | Create      |         |
| AuraComponent   | AccountSearch                          | Create      |         |
| AuraComponent   | AccountsLoaded                         | Create      |         |
| Class   | AccountSearchController                        | Create      |         |
## Installation instructions

You may install this app by using:
- [SFDX](#sfdx)

### SFDX
1. Authorize an Org in VSCode usign the [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode). Enable the Dev Hub in your org & Install [SFDX](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm).

2. Clone the **trailhead-lwc** repository:
    ```
    git clone https://github.com/MkHunter/trailhead-lwc
    cd trailhead-lwc
    ```

3. Create a scratch org and provide it with an alias of your choice (**tlwc** in the command below):
    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a tlwc
    ```

4. Push the app to your scratch org:
    ```
    sfdx force:source:push
    ```

5. Assign the **trailheadlwc** permission set to the default user:
    ```
    sfdx force:user:permset:assign -n trailheadlwc
    ```

6. Open the scratch org:
    ```
    sfdx force:org:open -p /lightning/n/Welcome
    ```

# Deployment Tasks
## Pre-installation
## Post-installation

# Resources
