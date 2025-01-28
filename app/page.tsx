import {
  Satellite,
  CloudCog,
  Network,
  Server,
  ServerCrash,
  MonitorCheck
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ReactCountryFlag from 'react-country-flag';

interface ServiceItem {
  Icon: LucideIcon;
  title: string;
}

interface PartnerItem {
  img: string;
  url: string;
  imgHeight: string;
  imgWidth: string;
}

interface IxpItem {
  name: string;
}

interface PopListItem {
  icon: string;
  name: string;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold underline decoration-blue-100 underline-offset-4 decoration-4 inline-block mb-4">
      {children}
    </h2>
  );
}

export default function Home() {
  const serviceItems: ServiceItem[] = [
    { Icon: CloudCog, title: "ProxmoxVE Hosting" },
    { Icon: Server, title: "Physical Device Hosting" },
    { Icon: MonitorCheck, title: "Bugtik(ROS) Management" },
    { Icon: Network, title: "CTCC CN2-NAT Connect" },
    { Icon: Satellite, title: "CTCC TR069 Connect" },
    { Icon: ServerCrash, title: "Crash Your RouteTable" }
  ];

  const partners: PartnerItem[] = [
    { img: "https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/icon-tc.7093cf3c.svg",
      url: "https://cloud.tencent.com/", imgHeight: "40px", imgWidth:"300px" },
    { img: "https://mikrotik.com/img/mtv2/newlogo.svg", url: "https://mikrotik.com/", imgHeight: "64px", imgWidth:"300px" },
    { img: "https://www.psychz.net/assets/images/header/logo.svg", url: "https://www.psychz.net/", imgHeight: "64px", imgWidth:"300px" }
  ];

  const ixpList: IxpItem[] = [
    { name: "[DE]LOCIX FRANKFURT" },
    { name: "[DE]KleyReX" },
    { name: "[DE]BGP.Exchange - Frankfurt" },
    { name: "[HK]ZXIX Hong Kong" },
    { name: "[CN]FSIX Shanghai" },
  ];

  const popList: PopListItem[] = [
    { name: "Cloud  Guangzhou", icon: "CN" },
    { name: "Cloud  Shanghai", icon: "CN" },
    { name: "Cloud  Beijing", icon: "CN" },
    { name: "Cloud  Chengdu", icon: "CN" },
    { name: "Self-Managed  Shenzhen  Foshan", icon: "CN" },
    { name: "Hosted  Zhongshan", icon: "CN" },
    { name: "Hong Kong", icon: "HK" },
    { name: "Singapore", icon: "SG" },
    { name: "Japan  Tokyo", icon: "JP" },
    { name: "Korea  Seoul", icon: "KR" },
    { name: "Germany  Frankfurt", icon: "DE" },
    { name: "United States  San Francisco  Los Angeles  Portland", icon: "US" },

  ];
  return (
    <div>
      <div
        id="banner"
        className="bg-cover bg-center text-white h-1/2 min-h-[510px] flex justify-center items-center text-shadow-md font-bold bg-[url('/img/background.png')]"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl text-shadow md:text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Htroy Research Network</h1>
          <h1 className="text-3xl text-shadow md:text-3xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>a.k.a:Htroy Network Research Limited.</h1>
          <p className="text-2xl text-shadow md:text-2xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Backbone-AS139216</p>
          <p className="text-2xl text-shadow md:text-2xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>SubNetwork-208698</p>
        </div>
      </div>
      <div className="container mx-auto text-center my-8 flex flex-col gap-8">
        <section>
          <SectionTitle>Description</SectionTitle>
          <p>
            Htroy Network is an education & experimental network.This network only supports IPv6.
          </p>
          <p>
            AS139216 is the backbone network of Htroy Network | AS208698 is for personal home use.
          </p>
        </section>

        <section>
          <SectionTitle>Operating Services</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {serviceItems.map(({ Icon, title }, index) => (
              <div
                key={index}
                className="bg-noise bg-blue-50 text-blue-950/90 p-4 rounded flex items-center justify-center flex-col gap-2"
              >
                <Icon size={56} strokeWidth={1.5} />
                <div className="font-bold">{title}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>POP Region</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-6">
            {popList.map(({ icon, name }, index) => (
                <div
                    key={index}
                    className="bg-noise bg-gray-50 p-4 rounded flex items-center justify-center flex-col gap-2"
                >
                  <ReactCountryFlag countryCode={icon} svg style={{ width: '40px', height: '40px' }} cdnUrl="https://unpkg.com/flag-icons/flags/4x3/" />
                  <div className="font-bold">
                    {name.split('  ').map((word, i) => (
                      <div key={i}>{word}</div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center">
          <SectionTitle>Joined IXPs</SectionTitle>
          <div className="text-left max-w-md">
            <ul>
              {ixpList.map((item, index) => (
                  <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionTitle>Major Suppliers</SectionTitle>
          <div className="bg-slate-300 flex justify-center items-center">
            {partners.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="inline-block m-2"
                style={{
                  backgroundImage: `url('${item.img}')`,
                  width: `${item.imgWidth}`,
                  height: `${item.imgHeight}`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              ></a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
