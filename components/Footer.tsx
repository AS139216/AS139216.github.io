export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="my-8 text-sm">
        <p className="text-center opacity-50">{currentYear} | Htroy Network | Image:Victoria Harbour@Hong Kong | Contact:noc#139216.network(#=&gt;@)</p>
        <p className="text-right opacity-50 mr-4">
            Source code copied form:<a href={"https://github.com/twdsco/www.twds.com.tw"}>www.twds.com.tw</a> Thx.
        </p>
    </div>
  );
}
