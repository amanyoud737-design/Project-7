import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="container">
      <div className="card" style={{padding:18}}>
        <div style={{fontSize:22, fontWeight:900}}>شكرًا لك 🎉</div>
        <div style={{color:"var(--muted)", marginTop:8, lineHeight:1.8}}>
          تم استلام الدفع بنجاح. يمكنك الآن العودة للمحرر وتنزيل العرض.
        </div>
        <div style={{display:"flex", gap:10, marginTop:14, flexWrap:"wrap"}}>
          <Link className="btn" href="/builder">العودة للمحرر</Link>
          <Link className="btn secondary" href="/">الرئيسية</Link>
        </div>
      </div>
    </div>
  );
}
