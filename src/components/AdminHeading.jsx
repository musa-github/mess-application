import React from "react";

const AdminHeading = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <table>
            <tr>
              <th>ক্র নং</th>
              <th>নাম</th>
              <th>পদবী</th>
              <th>নগদ জমা</th>
            </tr>
          </table>
        </div>
        <div className="col-md-4">
          <table>
            <tr>
              <th>পূর্বের জমা</th>
              <th>পূর্বের পাওনা</th>
              <th>মোট জমা</th>
              <th>মোট খরচ</th>
            </tr>
          </table>
        </div>
        <div className="col-md-4">
          <table>
            <tr>
              <th>মেস দেনা</th>
              <th>মেস পাওনা</th>
              <th>মোট মিল</th>
              <th>মিল রেট</th>
              <th>মিল খরচ</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AdminHeading;
