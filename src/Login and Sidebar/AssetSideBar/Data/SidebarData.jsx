
import {AiOutlineDashboard} from "react-icons/ai"
import {TbAsset} from "react-icons/tb"
import {BsPersonPlus} from "react-icons/bs"
import {BiGitBranch,BiLogOutCircle} from "react-icons/bi"
import {GiReturnArrow} from "react-icons/gi"
import {MdProductionQuantityLimits} from "react-icons/md"
import {MdCategory} from "react-icons/md"
import {GiBuyCard} from "react-icons/gi"
import {FaFileContract} from "react-icons/fa"
import {GoRequestChanges} from "react-icons/go"
import {GrGroup} from "react-icons/gr"


export const SidebarData=[
    {
        title: "Dashboard",
        path: "dashboard",
        icon: <AiOutlineDashboard/>,
    },
      {
        title: "Vendor",
        path: "vendor",
        icon: <GiBuyCard />,
      },
      {
        title: "Supply",
        path: "supply",
        icon: <GiBuyCard />,
      },
      {
        title: "Category",
        path: "category",
        icon: <MdCategory/>,
      },
      {
        title: "Product",
        path: "product",
        icon: <MdProductionQuantityLimits />,
      },
      {
        title: "Asset",
        path: "asset",
        icon: <TbAsset />,
      },
      {
        title: "Inventory",
        path: "inventory",
        icon: <TbAsset />,
      },
      {
        title: "Department",
        path: "department",
        icon: <BiGitBranch />,
        
      },
      {
        title: "Employee",
        path: "employee",
        icon: <BsPersonPlus />,
      },
      {
        title: "Employee_Inventory",
        path: "employee_inventory",
        icon: <TbAsset />,
      },
      
    
      {
        title: "Asset_returned",
        path: "asset_returned",
        icon: <GiReturnArrow />,
       
      },
      {
        title: "Request",
        path: "request",
        icon: <GoRequestChanges/>,
        
      },

      {
        title: "E_I_Contract",
        path: "emp_item",
        icon: <FaFileContract />,
       
      },
    
    
]