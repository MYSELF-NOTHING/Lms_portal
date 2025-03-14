'use client'
import React from 'react'
import AdminSidebar from "../../components/admin/sidebar/adminSidebar";
import Heading from '../../../app/utils/Heading';
import CourseAnalytics from "../../components/admin/Analytics/CourseAnalytics";
import DashboardHeader from '../../../app/components/admin/DashBoardHeader';

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
               <CourseAnalytics />
            </div>
        </div>
    </div>
  )
}

export default Page