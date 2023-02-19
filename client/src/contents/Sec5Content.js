import SkippingRopeIcon from "../assets/SkippingRopeIcon.png";


export const cardTitle1 = "מתחילים";
export const cardTitle2 = "מתקדמים";
export const cardTitle3 = "אלופים";
export const cardSubTitle1 = "מתחילים לעבוד";
export const cardSubTitle2 = "מתקדמים להנות";
export const cardSubTitle3 = "עפים באוויר";
export const list1 = (
  <ul dir="RTL" className="list-disc list-inside text-sm mt-6 mr-4">
    <li>13 שיעורים</li>
    <li>ניצור בסיס של קפיצה בחבל</li>
    <li>פורמת ידיים</li>
    <li>עבודת רגליים</li>
    <li>טכניקה שמונעת פציעות</li>
    <li>טיימינג ויציבות</li>
  </ul>
);
export const list2 = (
  <ul dir="RTL" className="list-disc list-inside text-sm mt-6 mr-4">
    <li>18 שיעורים</li>
    <li>טכניקות מתקדמות ומתאגרות</li>
    <li>דאבל אנדר</li>
    <li>קרוס, סייד סווינג, מאחורי הגב</li>
    <li>סאוט׳ פו</li>
    <li>לאנג׳ים וסקוואטים</li>
    <li>360</li>
  </ul>
);
export const list3 = (
  <ul dir="RTL" className="list-disc list-inside text-sm mt-6 mr-4">
    <li>15 שיעורים</li>
    <li>כל מה שלמדנו ב״סינגלים״ נלמד לעשות בדאבלים״</li>
    <li>בניית קומבו נכון</li>
    <li>קומבינציות של תרגילים</li>
  </ul>
);
export const skipLevel1 = (
  <div className="flex relative justify-end m-4 sm:h-[70px]">
    <img className="mr-2" src={SkippingRopeIcon} alt="" />
  </div>
);
export const skipLevel2 = (
  <div className="flex relative justify-end m-4 sm:h-[70px]">
    <img className="mr-2" src={SkippingRopeIcon} alt="" />
    <img className="mr-2" src={SkippingRopeIcon} alt="" />
  </div>
);
export const skipLevel3 = (
  <div className="flex relative justify-end m-4 sm:h-[70px]">
    <img className="mr-2" src={SkippingRopeIcon} alt="" />
    <img className="mr-2" src={SkippingRopeIcon} alt="" />
    <img className="mr-2" src={SkippingRopeIcon} alt="" />
  </div>
);