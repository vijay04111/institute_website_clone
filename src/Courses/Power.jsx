import React from "react";
import "./PowerBI.css";

export default function PowerBI() {
  return (
    <div className="pbi-container">

     
      <header className="pbi-header">
        <h1>Power BI Data Analytics Course</h1>
        <p>Learn Data Visualization, Dashboard Design, Power Query & DAX.</p>
      </header>

    
      <section className="pbi-section">
        <h2>📘 About the Course</h2>
        <p>
          This course teaches you how to clean, transform, model, and visualize data 
          using Power BI. You will learn Power Query, DAX formulas, interactive dashboards, 
          report publishing and data analysis workflow.
        </p>
      </section>

      
      <section className="pbi-section">
        <h2>💡 What You Will Learn</h2>
        <ul>
          <li>Data Importing & Data Cleaning</li>
          <li>Power Query Editor</li>
          <li>DAX Functions (CALCULATE, SUMX, IF, FILTER)</li>
          <li>Data Modeling (Relationships, Star Schema)</li>
          <li>Interactive Dashboards</li>
          <li>Charts, KPIs, Cards, Slicers</li>
          <li>Power BI Desktop & Power BI Service</li>
          <li>Publishing & Sharing Reports</li>
        </ul>
      </section>

     
      <section className="pbi-section">
        <h2>📚 Course Syllabus</h2>
        <ol>
          <li>Introduction to Power BI</li>
          <li>Connecting to Excel, SQL & Web Data</li>
          <li>Power Query Transformations</li>
          <li>Data Modeling & Relationships</li>
          <li>DAX Basics + Advanced Measures</li>
          <li>Building Visuals (Bar, Pie, Map, KPI)</li>
          <li>Filters, Slicers & Drill-Through</li>
          <li>Creating Interactive Dashboards</li>
          <li>Power BI Cloud (Service)</li>
          <li>Publishing, Sharing & Refresh Schedules</li>
        </ol>
      </section>

    
      <section className="pbi-section pbi-projects">
        <h2>📊 My Power BI Projects</h2>

        <div className="pbi-project-card">
          <h3>Sales Analytics Dashboard</h3>
          <p>
            Analyzed yearly sales using <strong>DAX measures, slicers, KPIs</strong>.
          </p>
        </div>

        <div className="pbi-project-card">
          <h3>HR Employee Performance Report</h3>
          <p>
            Visualized employee attrition, performance and hiring data.
          </p>
        </div>

        <div className="pbi-project-card">
          <h3>Finance Expense Tracking Dashboard</h3>
          <p>
            Monthly expense breakdown using <strong>cards, matrix, charts</strong>.
          </p>
        </div>

        
        <div className="pbi-project-card custom">
          <h3>Your Power BI Project</h3>
          <p>Add your dashboard details here…</p>
        </div>
      </section>

    </div>
  );
}
