import VectorV from "../assets/VectorV.svg";

export const div1Title = "האקדמיה הראשונה בארץ לקפיצה בחבל";
export const div1Text = (
    <p className=" lg:mt-10 lg:text-2xl">
      אני מזמין אתכם להיחשף לעולם שלם שלא הכרתם. ספריית הקורס מכילה 50 שיעורים
      הסדר של הקורס הוא כרונולגי ויעזור לכם לבנות בסיס יציב ומגוון של קפיצה
      בחבל.
    </p>
  );
  export  const div2Title = "הקורס הזה בשבילי אם";
  export  const div2Text = (
    <ul className="lg:mt-6">
      <div className="grid grid-flow-col text-right items-center float-right">
        <li className="mr-2">
          אם אני רוצה לגוון את האירובי שלי ולהעלות את סיבולת לב הריאה{" "}
        </li>
        <img className="" src={VectorV} alt="" />
      </div>
      <div className="mt-2 grid grid-flow-col text-right items-center float-right">
        <li className="mr-2">
          אם אני לא רוצה לצאת מהבית בשביל ספורט אוכל לקפוץ בכל מקום
        </li>
        <img className="" src={VectorV} alt="" />
      </div>
      <div className="mt-2 grid grid-flow-col text-right items-center float-right">
        <li className="mr-2">
          אם תנאי מזג האוויר משפיעים לי על האימון, זה לא יקרה יותר
        </li>
        <img className="" src={VectorV} alt="" />
      </div>
      <div className="mt-2 grid grid-flow-col text-right items-center float-right">
        <li className="mr-2">אם אין לי זמן, כל שיעור לוקח עד 30 דקות</li>
        <img className="" src={VectorV} alt="" />
      </div>
      <div className="mt-2 grid grid-flow-col text-right items-center float-right">
        <li className="mr-2">
          אם ההליכון והסטפר משעממים אותי, מעכשיו כל דקת אירובי תיהיה סופר
          מעניינת
        </li>
        <img className="" src={VectorV} alt="" />
      </div>
    </ul>
  );

  export  const div3Title = "היתרונות שמעולם לא חשבתם שתקבלו מקפיצה בחבל";
  export const div3TitleSpan = "שתקבלו מקפיצה בחבל";
  export const div3Text = (
    <ul className="lg:mt-6">
      <div className="grid grid-flow-col text-right items-center float-right">
        <li className="mr-2">
          <span className="font-bold text-pink-300"> חוסן מנטלי</span> אנחנו
          לומדים תוך כדי תנועה מה שיגרום ללא מעט הצלפות בכל פעם שנתקע וננסה מחדש
          נפתח חוסן מנטלי חזק יותר
        </li>

        <img className="" src={VectorV} alt="" />
      </div>
      <div className="mt-2 grid grid-flow-col text-right items-center float-right">
        <li className="mr-2">
          <span className="font-bold text-pink-300"> שריפת קלוריות כפולה</span>{" "}
          בגלל שאנחנו למדים תוך כדי תנועה אנחנו גורמים למאמץ כפול מהרגיל - מה
          שיגרום לפעילות להפוך ליותר מאתגרת גם את הגוף וגם את המוח = פי 2 יותר
          שריפת קלוריות
        </li>

        <img className="" src={VectorV} alt="" />
      </div>
      <div className="mt-2 grid grid-flow-col text-right items-center float-right">
        <li className="mr-2">
          <span className="font-bold text-pink-300"> משחרר סטרס </span>
          תחושת ההצלחה שמגיעה לאחר לימוד של מיומנות חדשה גורמת למוח לשחרר
          הורומני שמחה שיעזרו לנו לשחרר את הסטרס היומיומי מחיינו
        </li>
        <img className="" src={VectorV} alt="" />
      </div>
    </ul>
  );