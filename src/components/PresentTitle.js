import React, { useContext } from 'react';
import { Store } from "../context";
function PresentTitle() {
 const {totalMembersMill} = useContext(Store)
 const result = totalMembersMill.reduce((accumulative,current)=>{return accumulative+current},0)
    return (
        <div className="row mt-2">
        <div className="col-md-2">
          <div className="present_name_container">
            <span>Sl.</span>
            <span>Name</span>
            <span>Designation</span>
          </div>
        </div>
        <div className="col-md-2">
          <div className="present_Week_container">
            <span className="week_name">Date</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
          </div>
        </div>
        <div className="col-md-2">
          <div className="present_Week_container">
            <span className="week_name">Date</span>
            <span>18</span>
            <span>19</span>
            <span>20</span>
            <span>21</span>
            <span>22</span>
            <span>23</span>
            <span>24</span>
          </div>
        </div>
        <div className="col-md-2">
          <div className="present_Week_container">
            <span className="week_name">Date</span>
            <span>25</span>
            <span>26</span>
            <span>27</span>
            <span>28</span>
            <span>29</span>
            <span>30</span>
            <span>31</span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="present_4thWeek_container">
            <span className="week_name">Date</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
        </div>
        <div className="col-md-1">
          <div className="present_total_container">
            <span> Total</span>
            <span>{result}</span>
          </div>
        </div>
      </div>
    )
}

export default PresentTitle
