'use client'
import React from 'react'
import AdminSidebar from "../../components/admin/sidebar/adminSidebar";
import Heading from '../../utils/Heading';
import DashboardHeader from '../../components/admin/DashBoardHeader';
import UserAnalytics from '../../components/admin/Analytics/UserAnalytics';

type Props = {}

const Page = (props: Props) => {
  return (
    <div>
        <Heading
         title="Elearning - Admin"
         description="ELearning is a platform for students to learn and get help from teachers"
         keywords="Prograaming,MERN,Redux,Machine Learning"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
               <UserAnalytics />
            </div>
        </div>
    </div>
  )
}

export default Page