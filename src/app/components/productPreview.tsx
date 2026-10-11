"use client";
import { useId, useState } from "react";
import BrandLogo from "./brandLogo";
import {
  LuArrowUpRight,
  LuBell,
  LuBookOpen,
  LuCalendarCheck,
  LuCheck,
  LuChevronDown,
  LuCreditCard,
  LuLayoutDashboard,
  LuMoreHorizontal,
  LuUsers,
} from "react-icons/lu";
const panels = [
  {
    name: "Overview",
    title: "A good day starts with a clear view.",
    subtitle: "Your school at a glance",
    metrics: [
      ["Students", "1,248"],
      ["Attendance", "96.4%"],
      ["Reports ready", "342"],
    ],
    chart: "Class performance",
    bars: [65, 83, 71, 92, 78, 87],
    activity: [
      ["Results published", "JSS 3 · Second term", "Ready"],
      ["School fees received", "Payment record updated", "Paid"],
      ["Attendance recorded", "SS 2 · Morning session", "Present"],
    ],
  },
  {
    name: "Academics",
    title: "Every result. Every student.",
    subtitle: "Academic records in one place",
    metrics: [
      ["Classes", "24"],
      ["Subjects", "18"],
      ["Reports ready", "342"],
    ],
    chart: "Subject performance",
    bars: [78, 88, 75, 91, 69, 84],
    activity: [
      ["Mathematics results", "JSS 3 · Second term", "Ready"],
      ["English Language results", "JSS 3 · Second term", "Ready"],
      ["Student report cards", "Second term · Academic records", "Ready"],
    ],
  },
  {
    name: "Attendance",
    title: "Know who is here. Keep parents close.",
    subtitle: "Student and staff attendance",
    metrics: [
      ["Present", "1,203"],
      ["Attendance", "96.4%"],
      ["Staff checked in", "48"],
    ],
    chart: "Attendance this week",
    bars: [94, 96, 93, 98, 96, 95],
    activity: [
      ["Student clock-in", "08:02 AM · Parent notified", "Present"],
      ["Staff arrival recorded", "07:45 AM · Attendance log", "Present"],
      ["Student clock-out", "02:35 PM · Parent notified", "Sent"],
    ],
  },
];
export default function ProductPreview() {
  const [active, setActive] = useState(0);
  const id = useId();
  const panel = panels[active];
  return (
    <div className="axi-dashboard relative grid grid-cols-[140px_minmax(0,_1fr)] min-h-[484px] border border-[#dcdbe5] rounded-2xl bg-white shadow-[0_20px_50px_-20px_rgb(47_46_65_/_22%)] overflow-hidden max-[1199px]:grid-cols-[110px_minmax(0,_1fr)] max-[959px]:grid-cols-[150px_minmax(0,_1fr)] max-[699px]:grid-cols-[minmax(0,_1fr)] max-[699px]:min-h-[477px]">
      <aside
        className="axi-dashboard-sidebar relative bg-[#fbfbfd] border-r border-hub-border [padding:20px_11px] max-[1199px]:px-[7px] max-[959px]:[padding:20px_13px] max-[699px]:hidden"
        aria-label="Preview modules"
      >
        <div className="axi-dashboard-brand flex items-center gap-[5px] px-[5px] mb-[25px] text-[17px] font-bold tracking-[-0.5px] max-[1199px]:text-[14px] max-[959px]:text-[19px]">
          <BrandLogo compact />
        </div>
        <div className="axi-school-label flex items-center gap-[7px] border border-hub-border rounded-2xl [padding:8px_6px] text-[9px] font-bold mb-6 [&>svg]:w-2.5 [&>svg]:h-2.5 [&>svg]:ml-auto [&_small]:block [&_small]:mt-0.5 [&_small]:text-[7px] [&_small]:text-hub-muted [&_small]:font-normal max-[1199px]:gap-1 max-[1199px]:px-1 max-[1199px]:[&>svg]:hidden max-[959px]:gap-[7px] max-[959px]:[padding:8px_6px] max-[959px]:text-[10px]">
          <span className="axi-school-avatar flex items-center justify-center h-[25px] w-[25px] rounded-2xl bg-hub-tint text-hub-accent-strong text-[11px] font-bold shrink-0">
            S
          </span>
          <div>
            Your school<small>School workspace</small>
          </div>
          <LuChevronDown aria-hidden="true" />
        </div>
        <p className="leading-[1.8] axi-dashboard-nav-label text-[7px] tracking-[1px] text-hub-muted [margin:0_7px_10px]">
          WORKSPACE
        </p>
        <div className="axi-dashboard-nav-item flex items-center gap-2 [padding:10px_7px] rounded-2xl text-hub-text text-[9px] mb-1 [&_svg]:w-[13px] [&_svg]:h-[13px] [&.is-current]:text-hub-accent-strong [&.is-current]:bg-hub-tint [&.is-current]:font-bold max-[1199px]:text-[8px] max-[1199px]:gap-1.5 max-[1199px]:px-[5px] max-[959px]:text-[10px] max-[959px]:gap-[9px] max-[959px]:[padding:10px_7px] is-current">
          <LuLayoutDashboard aria-hidden="true" /> Dashboard
        </div>
        <div className="axi-dashboard-nav-item flex items-center gap-2 [padding:10px_7px] rounded-2xl text-hub-text text-[9px] mb-1 [&_svg]:w-[13px] [&_svg]:h-[13px] [&.is-current]:text-hub-accent-strong [&.is-current]:bg-hub-tint [&.is-current]:font-bold max-[1199px]:text-[8px] max-[1199px]:gap-1.5 max-[1199px]:px-[5px] max-[959px]:text-[10px] max-[959px]:gap-[9px] max-[959px]:[padding:10px_7px]">
          <LuUsers aria-hidden="true" /> Students
        </div>
        <div className="axi-dashboard-nav-item flex items-center gap-2 [padding:10px_7px] rounded-2xl text-hub-text text-[9px] mb-1 [&_svg]:w-[13px] [&_svg]:h-[13px] [&.is-current]:text-hub-accent-strong [&.is-current]:bg-hub-tint [&.is-current]:font-bold max-[1199px]:text-[8px] max-[1199px]:gap-1.5 max-[1199px]:px-[5px] max-[959px]:text-[10px] max-[959px]:gap-[9px] max-[959px]:[padding:10px_7px]">
          <LuBookOpen aria-hidden="true" /> Academics
        </div>
        <div className="axi-dashboard-nav-item flex items-center gap-2 [padding:10px_7px] rounded-2xl text-hub-text text-[9px] mb-1 [&_svg]:w-[13px] [&_svg]:h-[13px] [&.is-current]:text-hub-accent-strong [&.is-current]:bg-hub-tint [&.is-current]:font-bold max-[1199px]:text-[8px] max-[1199px]:gap-1.5 max-[1199px]:px-[5px] max-[959px]:text-[10px] max-[959px]:gap-[9px] max-[959px]:[padding:10px_7px]">
          <LuCalendarCheck aria-hidden="true" /> Attendance
        </div>
        <div className="axi-dashboard-nav-item flex items-center gap-2 [padding:10px_7px] rounded-2xl text-hub-text text-[9px] mb-1 [&_svg]:w-[13px] [&_svg]:h-[13px] [&.is-current]:text-hub-accent-strong [&.is-current]:bg-hub-tint [&.is-current]:font-bold max-[1199px]:text-[8px] max-[1199px]:gap-1.5 max-[1199px]:px-[5px] max-[959px]:text-[10px] max-[959px]:gap-[9px] max-[959px]:[padding:10px_7px]">
          <LuCreditCard aria-hidden="true" /> Payments
        </div>
        <div className="axi-sidebar-bottom [&_small]:block [&_small]:mt-0.5 [&_small]:text-[7px] [&_small]:text-hub-muted [&_small]:font-normal absolute bottom-4 left-3.5 flex items-center gap-[7px] text-[9px] font-medium max-[1199px]:left-[9px] max-[1199px]:text-[8px] max-[959px]:left-[17px] max-[959px]:text-[9px]">
          <span className="axi-user-avatar flex items-center justify-center bg-hub-tint text-hub-accent-strong w-[25px] h-[25px] rounded-full text-[8px] font-bold">
            AD
          </span>
          <div>
            Administrator<small>School admin</small>
          </div>
        </div>
      </aside>
      <div className="axi-dashboard-main min-w-[0px]">
        <div className="axi-dashboard-topbar flex items-center justify-between h-12 px-[19px] border-b border-hub-border text-[9px] font-medium [&>div]:flex [&>div]:items-center [&>div]:gap-3.5 [&_svg]:w-[13px] [&_svg]:h-[13px] [&_svg]:text-hub-muted max-[699px]:px-[18px] max-[699px]:text-[11px] max-[699px]:h-[45px]">
          <span>School overview</span>
          <div>
            <LuBell aria-hidden="true" />
            <span className="axi-user-avatar flex items-center justify-center bg-hub-tint text-hub-accent-strong w-[25px] h-[25px] rounded-full text-[8px] font-bold">
              AD
            </span>
          </div>
        </div>
        <div className="axi-dashboard-body [padding:20px_18px_13px] max-[1199px]:px-[13px] max-[959px]:p-5 max-[699px]:[padding:20px_18px_15px] max-[379px]:px-[13px]">
          <div className="axi-dashboard-heading flex gap-2 justify-between items-start min-h-[43px] [&_p]:text-[8px] [&_p]:text-hub-muted [&_p]:mb-[5px] [&_p]:leading-[1.4] [&_h2]:text-[13px] [&_h2]:tracking-[-0.35px] [&_h2]:font-bold [&_h2]:leading-[1.4] [&_h2]:max-w-[245px] max-[959px]:[&_h2]:text-[15px] max-[959px]:[&_h2]:max-w-[300px] max-[699px]:min-h-[49px] max-[699px]:[&_p]:text-[9px] max-[699px]:[&_h2]:text-[15px] max-[699px]:[&_h2]:tracking-[-0.3px] max-[699px]:[&_h2]:max-w-[250px] max-[379px]:[&_h2]:text-[13px]">
            <div>
              <p className="text-hub-text text-[16px] leading-[1.8]">
                {panel.subtitle}
              </p>
              <h2 className="text-[clamp(30px,_3.1vw,_42px)] font-bold leading-[1.18] tracking-[-1.5px] max-[699px]:text-[31px] max-[699px]:tracking-[-1px]">
                {panel.title}
              </h2>
            </div>
            <span className="axi-term-label flex items-center gap-1.5 [padding:5px_7px] border border-hub-border rounded-2xl whitespace-nowrap text-hub-text text-[7px] [&_svg]:w-2.5 [&_svg]:h-2.5 max-[1199px]:hidden max-[959px]:flex max-[699px]:text-[8px] max-[699px]:px-[5px] max-[379px]:hidden">
              Second term <LuChevronDown aria-hidden="true" />
            </span>
          </div>
          <div
            className="axi-preview-tabs flex gap-5 border-b border-hub-border [margin:10px_0_15px] [&_button]:relative [&_button]:[padding:10px_0] [&_button]:min-h-[36px] [&_button]:text-[9px] [&_button]:text-hub-text [&_button]:font-medium [&_button]:cursor-pointer [&_button[aria-selected=true]]:text-hub-accent-strong [&_button[aria-selected=true]::after]:absolute [&_button[aria-selected=true]::after]:content-[''] [&_button[aria-selected=true]::after]:h-0.5 [&_button[aria-selected=true]::after]:bottom-[-1px] [&_button[aria-selected=true]::after]:left-0 [&_button[aria-selected=true]::after]:right-0 [&_button[aria-selected=true]::after]:bg-royal-lilac max-[959px]:[&_button]:text-[10px] max-[699px]:mt-[9px] max-[699px]:mb-4 max-[699px]:gap-[25px] max-[699px]:[&_button]:text-[11px] max-[699px]:[&_button]:py-3"
            role="tablist"
            aria-label="Explore the product preview"
          >
            {panels.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                id={id + "-tab-" + index}
                aria-selected={active === index}
                aria-controls={id + "-panel"}
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  let next = index;
                  if (event.key === "ArrowRight")
                    next = (index + 1) % panels.length;
                  else if (event.key === "ArrowLeft")
                    next = (index + panels.length - 1) % panels.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = panels.length - 1;
                  else return;
                  event.preventDefault();
                  setActive(next);
                  document.getElementById(id + "-tab-" + next)?.focus();
                }}
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div
            role="tabpanel"
            id={id + "-panel"}
            aria-labelledby={id + "-tab-" + active}
            tabIndex={0}
          >
            <div className="axi-dashboard-metrics grid grid-cols-[repeat(3,_minmax(0,_1fr))] gap-2 mb-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-[3px] [&>div]:border [&>div]:border-hub-border [&>div]:rounded-2xl [&>div]:[padding:10px_9px] [&>div>span]:text-[8px] [&>div>span]:text-hub-text [&_strong]:text-[22px] [&_strong]:leading-[1.3] [&_strong]:tracking-[-0.7px] [&_small]:flex [&_small]:items-center [&_small]:gap-0.5 [&_small]:whitespace-nowrap [&_small]:text-[6px] [&_small]:text-hub-muted [&_small_svg]:h-[9px] [&_small_svg]:w-[9px] [&_small_svg]:text-hub-accent-strong max-[959px]:[&>div>span]:text-[9px] max-[959px]:[&_strong]:text-[25px] max-[699px]:[&>div]:[padding:10px_8px] max-[699px]:[&>div]:gap-1 max-[699px]:[&_strong]:text-[25px] max-[379px]:[&_small]:text-[5px] max-[379px]:[&_strong]:text-[23px]">
              {panel.metrics.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <small>
                    <LuArrowUpRight aria-hidden="true" /> Sample school data
                  </small>
                </div>
              ))}
            </div>
            <div className="axi-dashboard-chart border border-hub-border p-3 rounded-2xl mb-3.5 max-[699px]:p-[13px] max-[699px]:[&_h3]:text-[12px]">
              <div className="axi-preview-card-title flex justify-between items-center gap-2.5 [&_h3]:text-[11px] [&_h3]:font-bold [&>svg]:w-[15px] [&>svg]:h-[15px] [&>svg]:text-hub-muted">
                <h3>{panel.chart}</h3>
                <LuMoreHorizontal aria-hidden="true" />
              </div>
              <div
                className="axi-bar-chart h-[105px] flex gap-2.5 mt-[18px] pb-[18px] max-[699px]:h-[116px]"
                role="img"
                aria-label={
                  panel.chart +
                  ", illustrative percentages: " +
                  panel.bars.join(", ")
                }
              >
                <div className="axi-chart-scale flex flex-col justify-between text-[6px] text-hub-muted text-right max-[699px]:text-[7px]">
                  <span>100%</span>
                  <span>50%</span>
                  <span>0%</span>
                </div>
                <div className="axi-chart-bars flex items-end justify-around flex-1 gap-2.5 [background:repeating-linear-gradient(_to_top,_theme(colors.hub-border)_0,_theme(colors.hub-border)_1px,_transparent_1px,_transparent_43px_)] [&>div]:relative [&>div]:h-full [&>div]:flex-1 [&>div]:flex [&>div]:items-end [&>div]:justify-center [&>div>span]:w-[60%] [&>div>span]:max-w-[27px] [&>div>span]:min-w-[12px] [&>div>span]:bg-royal-lilac [&>div>span]:[border-radius:3px_3px_0_0] [&>div:nth-child(2n)>span]:bg-[#b4afff] [&_small]:absolute [&_small]:bottom-[-17px] [&_small]:whitespace-nowrap [&_small]:text-[6px] [&_small]:text-hub-muted max-[699px]:[&_small]:text-[7px]">
                  {panel.bars.map((value, index) => (
                    <div key={index}>
                      <span style={{ height: value + "%" }} />
                      <small>
                        {active === 1
                          ? ["Math", "Eng", "Sci", "ICT", "Art", "Soc"][index]
                          : active === 2
                            ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index]
                            : ["JS 1", "JS 2", "JS 3", "SS 1", "SS 2", "SS 3"][
                                index
                              ]}
                      </small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="axi-dashboard-activity [&_h3]:text-[10px] [&_h3]:font-bold [&_h3]:mb-[5px] max-[699px]:[&_h3]:text-[11px]">
              <h3>Recent activity</h3>
              {panel.activity.map(([title, description, status]) => (
                <div
                  className="axi-activity-row flex items-center gap-[7px] py-2 border-b border-hub-border last:border-0 last:pb-0 [&_strong]:block [&_strong]:text-[8px] [&_strong]:font-medium [&_small]:block [&_small]:text-[6px] [&_small]:text-hub-muted [&_small]:mt-0.5 [&>.axi-preview-status]:ml-auto [&>.axi-preview-status]:text-[6px] [&>.axi-preview-status]:[padding:3px_6px] max-[959px]:[&_strong]:text-[9px] max-[959px]:[&_small]:text-[7px] max-[699px]:py-[9px] max-[699px]:gap-2 max-[699px]:[&_strong]:text-[10px] max-[699px]:[&_small]:text-[8px]"
                  key={title}
                >
                  <span className="axi-activity-icon flex items-center justify-center w-[22px] h-[22px] rounded-2xl bg-hub-tint text-hub-accent-strong [&_svg]:w-[11px] [&_svg]:h-[11px]">
                    <LuCheck aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <small>{description}</small>
                  </div>
                  <span className="axi-preview-status inline-flex items-center [padding:4px_7px] rounded-2xl text-[8px] font-medium leading-[1.4] bg-[#edf5f1] text-hub-success whitespace-nowrap">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
