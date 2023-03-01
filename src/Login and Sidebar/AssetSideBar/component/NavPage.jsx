import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Asset from "./pages/Asset/Asset"
import AddEditAsset from "./pages/Asset/AddEditAsset"
import ViewAsset from "./pages/Asset/ViewAsset"
import Employee from "./pages/employee/Employee"
import AddEditEmployee from "./pages/employee/AddEditEmployee"
import ViewEmployee from "./pages/employee/ViewEmployee"
import Product from "./pages/product/Prouct"
import AddEditProduct from "./pages/product/AddEditProduct"
import ViewProduct from "./pages/product/ViewProduct"
import Category from "./pages/category/Category"
import AddEditCategory from "./pages/category/AddEditCategory"
import ViewCategory from "./pages/category/ViewCategory"
import Vendor from "./pages/vendor/Vendor"
import AddEditVendor from "./pages/vendor/AddEditVendor"
import ViewVendor from "./pages/vendor/ViewVendor"
import Supply from "./pages/supply/Supply";
import ViewSupply from "./pages/supply/ViewSupply"
import AddEditSupply from "./pages/supply/AddEditSupply"
import Request from "./pages/Request/Request"
import AddEditRequest from "./pages/Request/AddEditRequest"
import ViewRequest from "./pages/Request/ViewRequest"
import E_I_Contract from "./pages/E_I_contract/E_I_Contract"
import AddEditE_I_Contract from "./pages/E_I_contract/AddEditE_I_Contract"
import ViewE_I_Contract from "./pages/E_I_contract/ViewE_I_Contract"

import Asset_Returned from "./pages/Asset_return/Asset_returned"
import AddEditAsset_returned  from "./pages/Asset_return/AddEditAsset_returned";
import ViewAsset_returned from "./pages/Asset_return/ViewAsset_returned"
import Dashboard from "./pages/Dashboard/Dashboard"
import Department from "./pages/departmen/Department"
import AddEditDepartment from "./pages/departmen/AddEditDepartment";
import ViewDepartment from "./pages/departmen/ViewDepartment";
import Inventory from "./pages/Inventory/Inventory";
import Employee_Inventory from "./pages/Employee_Inventory/Employee_Inventory";
import AddEditInventory from "./pages/Inventory/AddEditInventory";
import ViewInventory from "./pages/Inventory/ViewInventory";
import AddEditEmployee_Inventory from "./pages/Employee_Inventory/AddEditEmployee_Inventory";
import ViewEmployee_Inventory from "./pages/Employee_Inventory/ViewEmployee_Inventory";
import AvailableProduct from "./pages/Dashboard/AvailableProduct";
import TotalInentoryPrice from "./pages/Dashboard/TotalInventoryPrice";
import TotalEmployee from "./pages/Dashboard/TotalEmployee";
import TotalAssetPrice from "./pages/Dashboard/TotalAssetPrice";
import EmpPerDepartment from "./pages/Dashboard/EmpPerDepartment";
import ReturnAssetStatus from "./pages/Dashboard/ReturnedAssetStatus"
import ABEperDepartment from './pages/Dashboard/ABEperDepartment'
import Barchart from './pages/Dashboard/Barchart'

import AvailabelAsset from  "./pages/Asset/Remainingaaset";
import Remainingrequest from  "./pages/Dashboard/Remainingrequest";


const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
         
        <Route path="/" element={<Dashboard />} /> 
        <Route path="dashboard" element={<Dashboard />} />
        
        <Route path='remainingrequest' element={<Remainingrequest />} />
        <Route path='availableasset' element={<AvailabelAsset />} />
        <Route path="dashboard/anualbejetperdepartment" element={<ABEperDepartment />} />
        <Route path="dashboard/barchart" element={<Barchart />} />
        <Route path="dashboard/employeeperdepartment" element={<EmpPerDepartment />} />
        <Route path="/dashboard/totalassetprice" element={<TotalAssetPrice />} />
        <Route path="/dashboard/rastatus" element={<ReturnAssetStatus />} />
        <Route path="/dashboard/depaperemp" element={<EmpPerDepartment />} />
        
        <Route path="asset" element={<Asset />} />
        <Route path="/asset/addasset" element={<AddEditAsset />} />
        <Route path="/asset/updateasset/:assetID" element={<AddEditAsset />} />
        <Route path="/asset/viewasset/:assetID" element={<ViewAsset />} />
        <Route path="employee" element={<Employee/>} />
        <Route path="/employee/addemployee" element={<AddEditEmployee/>} />
        <Route path="/employee/updateemployee/:employeeID" element={<AddEditEmployee/>} />
        <Route path="/employee/viewemployee/:employeeID" element={<ViewEmployee/>} />
        <Route path="department" element={<Department />} />
        <Route path="/department/adddepartment" element={<AddEditDepartment />} />
        <Route path="/department/updatedepartment/:departmentID" element={<AddEditDepartment />} />
        <Route path="/department/viewdepartment/:departmentID" element={<ViewDepartment />} />
        <Route path="product" element={<Product />} />
        <Route path="/product/addproduct" element={<AddEditProduct />} />
        <Route path="/product/updateproduct/:productID" element={<AddEditProduct />} />
        <Route path="/product/viewproduct/:productID" element={<ViewProduct />} />
        <Route path="category" element={<Category />} />
        <Route path="/category/addcategory" element={<AddEditCategory />} />
        <Route path="/category/updatecategory/:categoryID" element={<AddEditCategory />} />
        <Route path="/category/viewcategory/:categoryID" element={<ViewCategory />} />
        <Route path="vendor" element={<Vendor />} />

        <Route path="/vendor/addvendor" element={<AddEditVendor />} />
        <Route path="/vendor/updatevendor/:vendorID" element={<AddEditVendor />} />
        <Route path="/vendor/viewvendor/:vendorID" element={<ViewVendor />} />
        <Route path="emp_item" element={<E_I_Contract />} />
        <Route path="/emp_item/updateemp_item/:emp_itemID" element={<AddEditE_I_Contract />} />
        <Route path="/emp_item/addemp_item" element={<AddEditE_I_Contract />} />
        <Route path="/emp_item/viewemp_item/:emp_itemID" element={<ViewE_I_Contract />} />
        <Route path="/asset_returned/addasset_returned" element={<AddEditAsset_returned />} />
        <Route path="asset_returned" element={<Asset_Returned />} />
        <Route path="/asset_returned/updateasset_returned/:asset_returnedID" element={<AddEditAsset_returned />} />
        <Route path="/asset_returned/viewasset_returned/:asset_returnedID" element={<ViewAsset_returned />} />
        <Route path="supply" element={<Supply />} />
        <Route path="/supply/addsupply" element={<AddEditSupply />} />
        <Route path="/supply/updatesupply/:supplyID" element={<AddEditSupply />} />
        <Route path="/supply/viewsupply/:supplyID" element={<ViewSupply />} />
        <Route path="/request/addrequest" element={<AddEditRequest />} />
        <Route path="request" element={<Request />} />
        <Route path="/request/updaterequest/:requestNO" element={<AddEditRequest />} />
        <Route path="/request/viewrequest/:requestNO" element={<ViewRequest />} />
        <Route path="inventory" element={<Inventory/>} />
        <Route path="/inventory/addinventory" element={<AddEditInventory />} />
        <Route path="/inventory/updateinventory/:inventoryID" element={<AddEditInventory />} />
        <Route path="/inventory/viewinventory/:inventoryID" element={<ViewInventory/>} />
        <Route path="employee_inventory" element={<Employee_Inventory />} />
        <Route path="/employee_inventory/addemployee_inventory" element={<AddEditEmployee_Inventory />} />
        <Route path="/employee_inventory/updateemployee_inventory/:emp_invID" element={<AddEditEmployee_Inventory />} />
        <Route path="/employee_inventory/viewemployee_inventory/:emp_invID" element={<ViewEmployee_Inventory />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;