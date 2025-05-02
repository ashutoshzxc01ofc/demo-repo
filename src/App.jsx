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

// 1. Layout Components
function Sidebar() {
  return (
    <div className="w-20 bg-surface-surface-dl flex flex-col items-center py-4">
      <div className="mb-8 mt-6">
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md flex items-center justify-center text-white font-bold">
            ZS
          </div>
        </div>
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
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-50 text-brand-primary-main font-bold">
          <ChevronDown size={16} />
        </div>
      </td>
    </tr>
  );
}

function ProgressBadge({ type, count }) {
  let icon;
  let colorClass;
  let label;

  switch (type) {
    case "running":
      icon = <Clock size={16} className="text-brand-secondary-main mr-2" />;
      colorClass = "";
      label = "running";
      break;
    case "success":
      icon = <CheckCircle size={16} className="text-success-main mr-2" />;
      colorClass = "";
      label = "Successful";
      break;
    case "failed":
      icon = <XCircle size={16} className="text-destructive-hover mr-2" />;
      colorClass = "";
      label = "Failed";
      break;
    case "hold":
      icon = <AlertCircle size={16} className="text-warning-main mr-2" />;
      colorClass = "";
      label = "On-Hold";
      break;
    default:
      icon = <Clock size={16} className="text-gray-500 mr-2" />;
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
function RightSidebar() {
  return (
    <div className="space-y-6">
      <div className="bg-surface-surface-dark rounded-radius-xsmall p-6 shadow-xl border">
        <h2 className="text-xl font-bold-ds mb-6">Alerts</h2>
        {/* <div className="flex  space-y-4 ">
          <AlertSummaryCard
            label="Pre-requisite failure"
            count={3}
            color="orange"
          />
          <AlertSummaryCard label="Task failure" count={12} color="red" />
          <AlertSummaryCard label="Discrepancy" count={2} color="yellow" />
        </div> */}

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-radius-xsmall place-content-around border-b-4 border-destructive-active border shadow-xl ">
            <div className="text-destructive-active font-medium">
              Pre-requisite failure
            </div>
            <div className="text-2xl font-bold-ds mt-2 text-destructive-active">
              3
            </div>
          </div>
          <div className="p-4 rounded-radius-xsmall border-b-4 border-destructive-hover border shadow-xl ">
            <div className="text-destructive-hover font-medium">
              Task failure
            </div>
            <div className="text-2xl font-bold-ds mt-8 text-destructive-hover">
              12
            </div>
          </div>
          <div className="p-4 rounded-radius-xsmall border-b-4 border-warning-main border shadow-xl  ">
            <div className="text-warning-main font-medium ">Discrepancy</div>
            <div className="text-2xl text-warning-main mt-8 font-bold-ds">2</div>
          </div>
        </div>
      </div>

      <IncidentHistory />
    </div>
  );
}

function AlertSummaryCard({ label, count, color }) {
  return (
    <div className={`p-4 rounded-lg border-t-4 border-${color}-500 w-20 `}>
      <div className="text-sm text-gray-500">{label}</div>
      <div className={`text-2xl font-bold text-${color}-500 mt-1`}>{count}</div>
      <div className={`w-full h-1 bg-${color}-100 rounded-full mt-2`}>
        <div
          className={`h-1 bg-${color}-500 rounded-full`}
          style={{ width: `${count * 8}%` }}
        ></div>
      </div>
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
    <div className="bg-surface-surface-dark rounded-radius-xsmall p-6 shadow-xl border">
      <h2 className="text-xl font-bold-ds mb-4">Incident History</h2>
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
          <button className="text-interactive-default font-medium border mt-2 w-full rounded-radius-circle py-1 border-interactive-default">
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
