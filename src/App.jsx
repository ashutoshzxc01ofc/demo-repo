import React, { useState } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  AlertCircle,
  Home,
  Database,
  BarChart2,
  Settings,
  Bell,
  ChevronDown,
  User,
} from "lucide-react";

export default function App() {
  return (
    <div className="flex font-mulish h-screen bg-surface-surface-main ">
      <Sidebar />
      <MainContent />
    </div>
  );
}

const MyCustomIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 38" // Keep viewBox for scaling
    fill="none"       // Keep fill="none" as paths have specific fills
    className={className} // Use className for sizing/styling
    {...props}          // Pass other props like aria-hidden, etc.
  >
    <g clipPath="url(#clip0_5084_12800)"> {/* Use camelCase for clipPath */}
      <path d="M21.9004 25.0713V9.21973L18.5972 12.4944V28.346L21.9004 25.0713Z" fill="#C1C5C8"/>
      <path d="M25.916 25.0706V23.4676L33.91 10.7336H26.23V9.21899H35.84V10.6443L27.7796 23.5572H35.84V25.071L25.916 25.0706Z" fill="#898A8D"/>
      <path d="M47.9468 21.7085C47.6064 23.9294 45.5204 25.325 42.5984 25.325C40.1932 25.325 38.6192 24.7234 37.1132 23.2298L38.2824 22.0706C39.6084 23.3857 40.8448 23.8096 42.6424 23.8096C44.492 23.8096 45.7876 23.0767 46.1692 21.8104C46.2191 21.6417 46.249 21.4677 46.2584 21.2921C46.2883 20.869 46.2246 20.4445 46.0716 20.0484C45.9552 19.7264 45.5892 19.2972 45.3068 19.1065C44.684 18.6544 43.7932 18.2736 42.878 17.9651L41.0912 17.3583C39.8872 16.9435 38.9872 16.3748 38.4028 15.6653C37.7144 14.8301 37.4808 13.6129 37.6828 12.3859C37.6828 12.3776 37.6972 12.3018 37.6972 12.3018C38.1976 10.1999 39.9396 8.96533 42.6772 8.96533C44.7228 8.96533 45.8572 9.57528 47.2284 10.8011L46.1268 11.8933C45.138 11.0018 44.296 10.4363 42.6096 10.4363C40.6168 10.4363 39.5156 11.4837 39.2976 12.8848C39.214 13.6609 39.4252 14.2396 39.8304 14.7317C40.2428 15.2342 40.9652 15.6383 41.7608 15.9136L43.4408 16.4791C44.6604 16.884 46.0008 17.5213 46.7476 18.1844C46.7476 18.1844 48.304 19.3809 47.9476 21.7069" fill="#898A8D"/>
      <path d="M3.3032 25.0713V9.21973L0 12.4944V28.346L3.3032 25.0713Z" fill="#97A3AE"/>
      <path d="M4.64917 32.9553L7.95237 29.6807V20.4612L4.64917 23.7362V32.9553Z" fill="#EC7700"/>
      <path d="M7.95237 4.60962L4.64917 7.88464V17.1037L7.95237 13.8291V4.60962Z" fill="#97A3AE"/>
      <path d="M4.64917 17.1037V23.7363L7.95237 20.4612V13.8291L4.64917 17.1037Z" fill="#96460A"/>
      <path d="M9.29883 28.3457V37.5652L12.6016 34.2901V25.071L9.29883 28.3457Z" fill="#C1C5C8"/>
      <path d="M9.29883 19.1266V21.7135L12.6016 18.4385V15.8516L9.29883 19.1266Z" fill="#EC7700"/>
      <path d="M12.6016 0L9.29883 3.27502V12.4941L12.6016 9.21948V0Z" fill="#97A3AE"/>
      <path d="M9.29883 28.3456L12.6016 25.071V18.4385L9.29883 21.7135V28.3456Z" fill="#C1531B"/>
      <path d="M12.6016 15.8519V9.21973L9.29883 12.4944V19.1269L12.6016 15.8519Z" fill="#96460A"/>
      <path d="M17.2508 20.4612L13.948 23.7362V32.9557L17.2508 29.6807V20.4612Z" fill="#C1C5C8"/>
      <path d="M17.2508 13.8291V4.60962L13.948 7.88464V17.1037L17.2508 13.8291Z" fill="#EC7700"/>
      <path d="M17.2508 13.8291L13.948 17.1037V23.7363L17.2508 20.4612V13.8291Z" fill="#C1531B"/>
    </g>
    <defs> {/* Include the definitions */}
      <clipPath id="clip0_5084_12800"> {/* Ensure the ID matches the clipPath URL */}
        <rect width="48" height="37.5652" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);



// 1. Layout Components
function Sidebar() {
  return (
    <div className="w-20 bg-surface-surface-dl flex flex-col items-center py-4">
      <div className="mb-8 mt-6">
      <MyCustomIcon className="w-10 h-10" />
       {/* <div className="flex items-center justify-center">
          <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md flex items-center justify-center text-white font-bold">
            ZS
          </div>
        </div> */}
      </div>

      {/* <SidebarItem icon={<Home size={20} />} label="Home" active />
      <SidebarItem icon={<Database size={20} />} label="Live View" />
      <SidebarItem icon={<BarChart2 size={20} />} label="Reports" />
      <SidebarItem icon={<Settings size={20} />} label="Settings" />
      <SidebarItem icon={<Bell size={20} />} label="Alerts" /> */}

      {/* Top Items */}
      <div className="flex flex-col items-center space-y-8">
        <SidebarItem icon={<Home size={20} />} label="Home" active />
        <SidebarItem icon={<Database size={20} />} label="Live View" />
        <SidebarItem icon={<BarChart2 size={20} />} label="Reports" />
      </div>

      <div className="mt-auto flex flex-col items-center space-y-8 mb-12">

        <SidebarItem icon={<Settings size={20} />} label="Settings" />
        <SidebarItem icon={<Bell size={20} />} label="Alerts" />

        <div className="h-10 w-10 rounded-full bg-brand-primary-main flex items-center justify-center text-white">
          AK
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`w-full flex flex-col items-center py-3 text-xs ${active ? "text-white bg-surface-surface-dl " : "text-gray-400"}`}
    >
      {icon}
      <span className="mt-1">{label}</span>
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden x">
      <Header />
      <div className="flex-1 p-6 bg-white">
        <ScheduleSection />
        <div className="flex gap-6 ">
          <div className="flex-1 w-3/4">
            <FlowTableSection />
          </div>
          <div className="w-1/4">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className=" p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-full max-w-md mx-auto">
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search project"
              className="w-full pl-10 pr-4 py-2 rounded-radius-large border bg-surface-surface  border-stroke-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="text-left">
        <h1 className="text-xl font-mulish font-bold-ds">Welcome Akash,</h1>
        <p className="text-gray-500 mt-2">
          Here are the some of the task as per project schedule.
        </p>
      </div>
    </header>
  );
}

// 2. Schedule Components
function ScheduleSection() {
  const scheduleData = [
    {
      time: "8:10 AM",
      project: "KITE",
      title: "Backup Restore Validation",
      description: "Validate successful restoration of previous day backup.",
    },
    {
      time: "10:15 AM",
      project: "Stemline",
      title: "Verify the File Transfer from SFTP",
      description:
        "Needs to check the count of files that have been transferred from SFTP to S3 Flow Name: FLOW_SFTP_TO_S3",
    },
    {
      time: "11:00 AM",
      project: "Gore",
      title: "Perform Schema and Ingestion Validation",
      description:
        "Needs to check the Daily files Update mail for any failures in schema and ingestion check.",
    },
    {
      time: "12:00 PM",
      project: "KITE",
      title: "Reporting Table Count Validation",
      description:
        "Need to check that no reporting table and back up table has 0 record count and check reason for negative Delta.",
    },
  ];

  const breaks = [
    { after: 0, duration: "15 min" },
    { after: 2, duration: "30 min" },
  ];

  return (
    <div className="mb-2 -mt-6">
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {scheduleData
          .map((item, index) => {
            const elements = [];

            elements.push(
              <ScheduleCard
                key={`card-${index}`}
                time={item.time}
                project={item.project}
                title={item.title}
                description={item.description}
              />
            );

            const breakAfter = breaks.find((b) => b.after === index);
            if (breakAfter) {
              elements.push(
                <BreakCard
                  key={`break-${index}`}
                  duration={breakAfter.duration}
                />
              );
            }

            return elements;
          })
          .flat()}
      </div>
    </div>
  );
}

function ScheduleCard({ time, project, title, description }) {
  return (
    <div className="w-80 rounded-radius-xsmall p-4 shadow-xl border border-gray-100 bg-surface-surface-dark">
      <div className="flex items-center mb-2 text-sm text-brand-primary-dark ">
        <Clock size={16} className="mr-2" />
        <span>{time}</span>
        {project && (
          <>
            <div className="mx-2 h-4 border-r border-gray-300 "></div>
            <span className="font-semibold text-brand-primary-dark">
              {project}
            </span>
          </>
        )}
      </div>
      <h3 className="font-bold-ds mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

function BreakCard({ duration }) {
  return (
    <div className="min-w-40 flex flex-col space-y-4 items-center justify-center">
      <div className="relative">
        <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center">
          <span className="text-3xl">🚶</span>
        </div>
      </div>
      <div className="mt-2 text-center">
        <div className="font-bold-ds">Time Break</div>
        <div className=" mt-2 font-bold-ds">{duration}</div>
      </div>
    </div>
  );
}

// 3. Flow Table Components
function FlowTableSection() {
  return (
    <div className="bg-surface-surface-dark rounded-radius-xsmall p-6 mb-6 shadow-xl border pb-10">
      <FilterSortBar />
      <FlowTable />
    </div>
  );
}

function FilterSortBar() {
  return (
    <div className="flex justify-between items-center mb-6 bg-">
      <div className="flex items-center space-x-2">
        <h2 className="text-xl font-bold-ds">Flow</h2>
        <div className="flex items-center space-x-2 text-sm ml-6">
          <span className="text-gray-500 ml-4">Project:</span>
          <div className="flex items-center">
            <span>All</span>
            <ChevronDown size={16} className="ml-1" />
          </div>
          <span className="text-gray-500 ml-4">Flow:</span>
          <div className="flex items-center">
            <span>All</span>
            <ChevronDown size={16} className="ml-1" />
          </div>
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="flex items-center text-gray-600 px-3 py-1 border border-gray-300 rounded-md">
          <Filter size={16} className="mr-1" />
          Filter
        </button>
        <button className="flex items-center text-gray-600 px-3 py-1 border border-gray-300 rounded-md">
          <ArrowUpDown size={16} className="mr-1" />
          Sort
        </button>
      </div>
    </div>
  );
}

function FlowTable() {
  const flowData = [
    {
      name: "KITE_DA_Ops",
      schedule: "Daily, Monday-Friday",
      project: "KITE",
      startTime: "Today at 09:22:00",
      status: [
        { type: "running", count: 1 },
        { type: "success", count: 11 },
        { type: "failed", count: 3 },
      ],
      alerts: 3,
    },
    {
      name: "Stemline_DA_Ops",
      schedule: "Wednesday",
      project: "Stemline",
      startTime: "Today at 09:00:03",
      status: [
        { type: "running", count: 2 },
        { type: "success", count: 5 },
        { type: "failed", count: 1 },
      ],
      alerts: 1,
    },
    {
      name: "Gore_DA_Ops",
      schedule: "Daily, Monday-Friday",
      project: "Gore",
      startTime: "Today at 08:50:10",
      status: [
        { type: "running", count: 3 },
        { type: "success", count: 3 },
        { type: "hold", count: 1 },
      ],
      alerts: 1,
    },
    {
      name: "MTPA_DA_Ops",
      schedule: "Daily, Monday-Friday",
      project: "MTPA",
      startTime: "Today at 08:30:07",
      status: [
        { type: "running", count: 3 },
        { type: "success", count: 7 },
        { type: "failed", count: 2 },
      ],
      alerts: 2,
    },
    {
      name: "KITE_DA_Ops",
      schedule: "Daily, Monday-Friday",
      project: "KITE",
      startTime: "Today at 08:00:00",
      status: [
        { type: "running", count: 1 },
        { type: "success", count: 11 },
      ],
      alerts: 0,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 border-b font-bold-ds">
            <th className="pb-3">Flow Name</th>
            <th className="pb-3">Project</th>
            <th className="pb-3">Start time</th>
            <th className="pb-3">Progress</th>
            <th className="pb-3">Alerts</th>
            <th className="pb-3"></th>
          </tr>
        </thead>
        <tbody>
          {flowData.map((flow, index) => (
            <FlowTableRow
              key={index}
              name={flow.name}
              schedule={flow.schedule}
              project={flow.project}
              startTime={flow.startTime}
              status={flow.status}
              alerts={flow.alerts}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const CustomTableIcon = () => (
  <svg
    width="40" // Fixed width
    height="40" // Fixed height
    viewBox="0 0 40 40"
    fill="none" // Root SVG has no fill
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Circle with fixed color */}
    <path
      d="M0 20C0 8.95431 8.95431 0 20 0V0C31.0457 0 40 8.95431 40 20V20C40 31.0457 31.0457 40 20 40V40C8.95431 40 0 31.0457 0 20V20Z"
      fill="#2D807B" // Fixed fill color
    />
    {/* Mask Definition */}
    <mask
      id="mask0_5084_12734_simple" // Added _simple to avoid potential ID conflicts if used alongside the other version
      style={{ maskType: 'alpha' }} // JSX style syntax
      maskUnits="userSpaceOnUse"
      x="8"
      y="8"
      width="24"
      height="24"
    >
      <rect x="8" y="32" width="24" height="24" transform="rotate(-90 8 32)" fill="#D9D9D9" />
    </mask>
    {/* Group using the mask */}
    <g mask="url(#mask0_5084_12734_simple)"> {/* Reference the unique mask ID */}
      {/* Inner Shape (Icon Detail) with fixed color */}
      <path
        d="M29 17L26 17L26 21L16 21L16 23L19 23L19 30L11 30L11 23L14 23L14 17L11 17L11 10L19 10L19 17L16 17L16 19L24 19L24 17L21 17L21 10L29 10L29 17ZM17 15L17 12L13 12L13 15L17 15ZM27 15L27 12L23 12L23 15L27 15ZM17 28L17 25L13 25L13 28L17 28Z"
        fill="white" // Fixed fill color
      />
    </g>
  </svg>
);

function FlowTableRow({ name, schedule, project, startTime, status, alerts }) {
  return (
    <tr className="border-b border-gray-100 ">
      <td className="py-4">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full  bg-brand-secondary-light flex items-center justify-center mr-3">
            <Clock size={14} className="text-grey-500" />
          </div>
          <div>
            <div className="text-brand-primary-main font-bold-ds">{name}</div>
            <div className="text-xs text-gray-500">{schedule}</div>
          </div>
        </div>
      </td>
      <td className="py-4">{project}</td>
      <td className="py-4">{startTime}</td>
      <td className="py-4">
        <div className="space-y-1">
          {status.map((item, index) => (
            <ProgressBadge key={index} type={item.type} count={item.count} />
          ))}
        </div>
      </td>
      <td className="py-4">{alerts > 0 && <AlertBadge count={alerts} />}</td>
      <td className="py-4">
        <CustomTableIcon></CustomTableIcon>
        {/* <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-50 text-brand-primary-main font-bold">
          <ChevronDown size={16} />
        </div> */}
      </td>
    </tr>
  );
}

//clockIcon
const ClockIcon = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-light-blue-400 ${props.className || ''}`}
    {...props} // Allows passing additional props like className, style, onClick, etc.
  >
    <mask
      id="mask0_5084_12607"
      style={{ maskType: 'alpha' }} // Note the style object and camelCase
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="16"
      height="16"
    >
      <rect width="16" height="16" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_5084_12607)">
      <path
        d="M7.99998 14.6668C7.07776 14.6668 6.21109 14.4918 5.39998 14.1418C4.58887 13.7918 3.88331 13.3168 3.28331 12.7168C2.68331 12.1168 2.20831 11.4113 1.85831 10.6002C1.50831 9.78905 1.33331 8.92238 1.33331 8.00016C1.33331 7.07794 1.50831 6.21127 1.85831 5.40016C2.20831 4.58905 2.68331 3.8835 3.28331 3.2835C3.88331 2.6835 4.58887 2.2085 5.39998 1.8585C6.21109 1.5085 7.07776 1.3335 7.99998 1.3335C8.9222 1.3335 9.78887 1.5085 10.6 1.8585C11.4111 2.2085 12.1166 2.6835 12.7166 3.2835C13.3166 3.8835 13.7916 4.58905 14.1416 5.40016C14.4916 6.21127 14.6666 7.07794 14.6666 8.00016C14.6666 8.92238 14.4916 9.78905 14.1416 10.6002C13.7916 11.4113 13.3166 12.1168 12.7166 12.7168C12.1166 13.3168 11.4111 13.7918 10.6 14.1418C9.78887 14.4918 8.9222 14.6668 7.99998 14.6668ZM7.99998 13.3335C9.48887 13.3335 10.75 12.8168 11.7833 11.7835C12.8166 10.7502 13.3333 9.48905 13.3333 8.00016H7.99998V2.66683C6.51109 2.66683 5.24998 3.1835 4.21665 4.21683C3.18331 5.25016 2.66665 6.51127 2.66665 8.00016C2.66665 9.48905 3.18331 10.7502 4.21665 11.7835C5.24998 12.8168 6.51109 13.3335 7.99998 13.3335Z"
        fill= "currentColor" // Default fill color from the original SVG
      />
    </g>
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-green-base ${props.className || ''}`}
    {...props} // Allows passing additional props like className, style, onClick, etc.
  >
    <mask
      id="mask0_5084_12612"
      style={{ maskType: 'alpha' }} // Note the style object and camelCase
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="16"
      height="17"
    >
      <rect y="0.39209" width="16" height="16" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_5084_12612)">
      <path
        d="M7.06665 11.4589L11.7666 6.75892L10.8333 5.82559L7.06665 9.59225L5.16665 7.69225L4.23331 8.62559L7.06665 11.4589ZM7.99998 15.0589C7.07776 15.0589 6.21109 14.8839 5.39998 14.5339C4.58887 14.1839 3.88331 13.7089 3.28331 13.1089C2.68331 12.5089 2.20831 11.8034 1.85831 10.9923C1.50831 10.1811 1.33331 9.31447 1.33331 8.39225C1.33331 7.47003 1.50831 6.60336 1.85831 5.79225C2.20831 4.98114 2.68331 4.27559 3.28331 3.67559C3.88331 3.07559 4.58887 2.60059 5.39998 2.25059C6.21109 1.90059 7.07776 1.72559 7.99998 1.72559C8.9222 1.72559 9.78887 1.90059 10.6 2.25059C11.4111 2.60059 12.1166 3.07559 12.7166 3.67559C13.3166 4.27559 13.7916 4.98114 14.1416 5.79225C14.4916 6.60336 14.6666 7.47003 14.6666 8.39225C14.6666 9.31447 14.4916 10.1811 14.1416 10.9923C13.7916 11.8034 13.3166 12.5089 12.7166 13.1089C12.1166 13.7089 11.4111 14.1839 10.6 14.5339C9.78887 14.8839 8.9222 15.0589 7.99998 15.0589Z"
        fill="currentColor" // Default fill color from the original SVG
      />
    </g>
  </svg>
);

const CloseCircleIcon = (props) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-red-500 ${props.className || ''}`}
    {...props} // Allows passing additional props like className, style, onClick, etc.
  >
    <mask
      id="mask0_5084_12617"
      style={{ maskType: 'alpha' }} // Note the style object and camelCase
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="16"
      height="17"
    >
      <rect y="0.39209" width="16" height="16" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_5084_12617)">
      <path
        d="M5.59998 11.7256L7.99998 9.32559L10.4 11.7256L11.3333 10.7923L8.93331 8.39225L11.3333 5.99225L10.4 5.05892L7.99998 7.45892L5.59998 5.05892L4.66665 5.99225L7.06665 8.39225L4.66665 10.7923L5.59998 11.7256ZM7.99998 15.0589C7.07776 15.0589 6.21109 14.8839 5.39998 14.5339C4.58887 14.1839 3.88331 13.7089 3.28331 13.1089C2.68331 12.5089 2.20831 11.8034 1.85831 10.9923C1.50831 10.1811 1.33331 9.31447 1.33331 8.39225C1.33331 7.47003 1.50831 6.60336 1.85831 5.79225C2.20831 4.98114 2.68331 4.27559 3.28331 3.67559C3.88331 3.07559 4.58887 2.60059 5.39998 2.25059C6.21109 1.90059 7.07776 1.72559 7.99998 1.72559C8.9222 1.72559 9.78887 1.90059 10.6 2.25059C11.4111 2.60059 12.1166 3.07559 12.7166 3.67559C13.3166 4.27559 13.7916 4.98114 14.1416 5.79225C14.4916 6.60336 14.6666 7.47003 14.6666 8.39225C14.6666 9.31447 14.4916 10.1811 14.1416 10.9923C13.7916 11.8034 13.3166 12.5089 12.7166 13.1089C12.1166 13.7089 11.4111 14.1839 10.6 14.5339C9.78887 14.8839 8.9222 15.0589 7.99998 15.0589Z"
        fill="currentColor" // Default fill color from the original SVG
      />
    </g>
  </svg>
);

const WarningIconNew = (props) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    className={`fill-warning-main ${props.className || ''}`}
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Allows passing additional props like className, style, onClick, etc.
  >
    <path
      d="M14.8 12.1482L9.33437 2.65637C9.19779 2.42382 9.00281 2.23101 8.76875 2.09703C8.53469 1.96306 8.26969 1.89258 8 1.89258C7.73031 1.89258 7.4653 1.96306 7.23124 2.09703C6.99719 2.23101 6.8022 2.42382 6.66562 2.65637L1.2 12.1482C1.06858 12.3732 0.999329 12.629 0.999329 12.8895C0.999329 13.15 1.06858 13.4058 1.2 13.6307C1.33483 13.8647 1.52948 14.0586 1.76397 14.1925C1.99847 14.3263 2.26436 14.3954 2.53437 14.3926H13.4656C13.7354 14.3952 14.0011 14.326 14.2353 14.1921C14.4696 14.0583 14.664 13.8645 14.7987 13.6307C14.9304 13.4059 14.9998 13.1502 15 12.8897C15.0003 12.6292 14.9312 12.3733 14.8 12.1482ZM7.5 6.89262C7.5 6.76001 7.55268 6.63283 7.64645 6.53907C7.74021 6.4453 7.86739 6.39262 8 6.39262C8.13261 6.39262 8.25978 6.4453 8.35355 6.53907C8.44732 6.63283 8.5 6.76001 8.5 6.89262V9.39262C8.5 9.52523 8.44732 9.6524 8.35355 9.74617C8.25978 9.83994 8.13261 9.89262 8 9.89262C7.86739 9.89262 7.74021 9.83994 7.64645 9.74617C7.55268 9.6524 7.5 9.52523 7.5 9.39262V6.89262ZM8 12.3926C7.85166 12.3926 7.70666 12.3486 7.58332 12.2662C7.45998 12.1838 7.36386 12.0667 7.30709 11.9296C7.25032 11.7926 7.23547 11.6418 7.26441 11.4963C7.29335 11.3508 7.36478 11.2172 7.46967 11.1123C7.57456 11.0074 7.7082 10.936 7.85368 10.907C7.99917 10.8781 8.14997 10.8929 8.28701 10.9497C8.42406 11.0065 8.54119 11.1026 8.6236 11.2259C8.70601 11.3493 8.75 11.4943 8.75 11.6426C8.75 11.8415 8.67098 12.0323 8.53033 12.1729C8.38968 12.3136 8.19891 12.3926 8 12.3926Z"
      fill="currentColor" // Default fill color from the original SVG
    />
  </svg>
);

function ProgressBadge({ type, count }) {
  let icon;
  let colorClass;
  let label;

  switch (type) {
    case "running":
      icon = <ClockIcon size = {16} className="text-brand-secondary-main mr-2" />
      colorClass = "";
      label = "running";
      break;
    case "success":
      icon = <CheckCircleIcon size={16} className="text-success-main mr-2" />;
      colorClass = "";
      label = "Successful";
      break;
    case "failed":
      icon = <CloseCircleIcon size={16} className="text-destructive-hover mr-2" />;
      colorClass = "";
      label = "Failed";
      break;
    case "hold":
      icon = <WarningIconNew size={16} className="text-warning-main mr-2" />;
      colorClass = "";
      label = "On-Hold";
      break;
    default:
      icon = <ClockIcon size={16} className="text-gray-500 mr-2" />;
      colorClass = "text-gray-500";
      label = type;
  }

  return (
    <div className="flex items-center">
      {icon}
      <span className={`text-sm ${colorClass}`}>
        {count} {label}
      </span>
    </div>
  );
}

function AlertBadge({ count }) {
  return (
    <div className="flex items-center">
      <AlertTriangle size={16} className="text-warning-main mr-2" />
      <span>{count}</span>
    </div>
  );
}

// 4. Right Sidebar Components
// function RightSidebar() {
//   return (
//     <div className="space-y-6">
//       <div className="bg-surface-surface-dark rounded-radius-xsmall p-6 shadow-xl border">
//         <h2 className="text-xl font-bold-ds mb-6">Alerts</h2>
//         {/* <div className="flex  space-y-4 ">
//           <AlertSummaryCard
//             label="Pre-requisite failure"
//             count={3}
//             color="orange"
//           />
//           <AlertSummaryCard label="Task failure" count={12} color="red" />
//           <AlertSummaryCard label="Discrepancy" count={2} color="yellow" />
//         </div> */}

//         <div className="grid grid-cols-3 gap-4 mb-6">
//           <div className="p-4 rounded-radius-xsmall place-content-around border-b-4 border-destructive-active border shadow-xl ">
//             <div className="text-destructive-active font-medium">
//               Pre-requisite failure
//             </div>
//             <div className="text-2xl font-bold-ds mt-2 text-destructive-active">
//               3
//             </div>
//           </div>
//           <div className="p-4 rounded-radius-xsmall border-b-4 border-destructive-hover border shadow-xl ">
//             <div className="text-destructive-hover font-medium">
//               Task failure
//             </div>
//             <div className="text-2xl font-bold-ds mt-8 text-destructive-hover">
//               12
//             </div>
//           </div>
//           <div className="p-4 rounded-radius-xsmall border-b-4 border-warning-main border shadow-xl  ">
//             <div className="text-warning-main font-medium ">Discrepancy</div>
//             <div className="text-2xl text-warning-main mt-8 font-bold-ds">2</div>
//           </div>
//         </div>
//       </div>

//       <IncidentHistory />
//     </div>
//   );
// }

// function AlertSummaryCard({ label, count, color }) {
//   return (
//     <div className={`p-4 rounded-lg border-t-4 border-${color}-500 w-20 `}>
//       <div className="text-sm text-gray-500">{label}</div>
//       <div className={`text-2xl font-bold text-${color}-500 mt-1`}>{count}</div>
//       <div className={`w-full h-1 bg-${color}-100 rounded-full mt-2`}>
//         <div
//           className={`h-1 bg-${color}-500 rounded-full`}
//           style={{ width: `${count * 8}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// }

const FlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-16 h-16">
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
  </svg>
);

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-16 h-16">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z" /> {/* Simple arrow-like shape */}
         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13l4-4-4-4v3H8v2h3v3z"/> {/* Arrow right */}

  </svg>
);


const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-16 h-16">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
);


function AlertSummaryCard({ label, count, color, IconComponent }) {
  // Map color prop to Tailwind classes
  // Using the colors from the original image description/code mapping:
  // orange -> destructive-active (adjust if needed)
  // red -> destructive-hover (adjust if needed)
  // yellow -> warning-main (adjust if needed)
  const colorStyles = {
    orange: {
      text: 'text-destructive-active', // Or choose a more orange color if available/needed
      bg: 'bg-destructive-active',     // e.g., 'text-orange-600', 'bg-orange-500'
      icon: 'text-destructive-active/10' // Low opacity icon color
    },
    red: {
      text: 'text-destructive-hover', // Or choose a more red color if available/needed
      bg: 'bg-destructive-hover',    // e.g., 'text-red-600', 'bg-red-500'
       icon: 'text-destructive-hover/10' // Low opacity icon color
    },
    yellow: {
      text: 'text-warning-main',    // e.g., 'text-yellow-600', 'bg-yellow-400'
      bg: 'bg-warning-main',
       icon: 'text-warning-main/20' // Low opacity icon color - slightly more visible for yellow
    },
  };

  const styles = colorStyles[color] || colorStyles.orange; // Default to orange if color invalid

  return (
    <div className="relative flex-1 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden p-4 min-w-[140px]">
      {/* Background Icon */}
      <div className={`absolute bottom-0 -right-1 opacity-50 ${styles.icon} pointer-events-none`}>
         <IconComponent />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top Text */}
        <div className={`text-sm font-medium text-gray-700 leading-tight`}>
           {/* Split label if needed - simple space split */}
          {label}
        </div>
        {/* Bottom Number */}
        <div className={`text-3xl font-bold-ds ${styles.text} mt-4`}>
          {count}
        </div>
      </div>

      {/* Bottom Color Bar */}
      <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${styles.bg}`}></div>
    </div>
  );
}

// --- Updated RightSidebar Component ---
function RightSidebar() {
  return (
    <div className="space-y-6">
      {/* Alerts Section */}
      {/* Using bg-white assuming surface-dark was just a placeholder */}
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Alerts</h2>

        {/* Container for the Alert Cards */}
        <div className="flex flex-row space-x-4 mb-4">
          <AlertSummaryCard
            label="Pre-requisite failure"
            count={3}
            color="orange"
            IconComponent={FlagIcon} // Pass the component itself
          />
          <AlertSummaryCard
            label="Task failure"
            count={12}
            color="red"
            IconComponent={ArrowIcon} // Pass the component itself
          />
          <AlertSummaryCard
            label="Discrepancy"
            count={2}
            color="yellow"
            IconComponent={WarningIcon} // Pass the component itself
          />
        </div>
      </div>

      {/* Incident History Section (assuming it's another component) */}
      <IncidentHistory />
    </div>
  );
}

function IncidentHistory() {
  const incidents = [
    {
      icon: "server",
      title: "Failed to connect to Source DB. Host unreachable.",
      color: "red",
    },
    {
      icon: "lock",
      title:"   Authentication error: Invalid or expired credentials for 'S3_Bucket'",
      color: "yellow",
    },
    {
      icon: "file",
      title: "Report generation failed: Query execution exceeded allowed time limit",
      color: "red",
    },
    {
      icon: "cpu",
      title: "Job terminated: Insufficient CPU or memory on node",
      color: "yellow",
    },
  ];

  return (
    <div className="bg-surface-surface-dark font-mulish rounded-radius-xsmall p-6 shadow-xl border">
      <h2 className="text-xl font-mulish font-bold-ds mt-2 mb-4">Incident History</h2>
      <div className="space-y-4">
        {incidents.map((incident, index) => (
          <IncidentCard
            key={index}
            icon={incident.icon}
            title={incident.title}
            color={incident.color}
          />
        ))}

        <div className="text-center mt-4">
          <button className="text-interactive-default font-medium border mt-2 mb-2 w-full rounded-radius-circle py-1 border-interactive-default">
            See more
          </button>
        </div>
      </div>
    </div>
  );
}

function IncidentCard({ icon, title, color }) {
  return (
    <div className="flex items-start">
    <div className="w-12">
      <div
        className={`w-8 h-8 rounded-full bg-${color === "yellow" ? "amber" : color}-50 text-${color === "yellow" ? "amber" : color}-500 flex items-center justify-center mr-3 mt-1`}
      >
        {icon === "server" && <Database size={16} />}
        {icon === "lock" && <AlertCircle size={16} />}
        {icon === "file" && <AlertCircle size={16} />}
        {icon === "cpu" && <AlertCircle size={16} />}
      </div>
    </div>
    <div className="w-full">
      <div className="text-sm mt-2">{title}</div>
    </div>
  </div>

  );
}
