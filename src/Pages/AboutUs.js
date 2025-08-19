import React from "react";
import "../styles.css"; // <-- fixed import path

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Us</h1>
        <p>Know about Pulse of Hope. What, how, and why.</p>
      </header>

      <main className="about-container">
        {/* Left Column */}
        <section className="about-left">
          <p>
            Pulse of Hope is an automated blood service that connects blood
            searchers with voluntary blood donors in a moment through SMS and
            website. Pulse of Hope is a free service for all. Pulse of Hope
            started its journey in 2018.
          </p>

          <h2>Why Pulse of Hope?</h2>
          <p>
            Though Bangladesh has more than 160 million people, the number of
            safe blood banks is very few. Without divisional towns, there is
            hardly any blood bank. But a huge amount of blood is needed for
            treatment purposes. A good number of accidents take place every day
            where blood is needed essentially. As a result, people fall in real
            trouble to manage blood. But there are many blood donors who are
            interested in donating blood but don’t know who needs blood. The
            communication gap is resulting in the loss of many lives.
          </p>
          <p>
            Pulse of Hope comes into the scenario to reduce or minimize the
            communication gap and connects people in a moment using the amazing
            power of SMS and email. As Pulse of Hope services can also be
            availed by SMS, people from any class of the society can easily
            avail of Pulse of Hope services.
          </p>
        </section>

        {/* Right Column */}
        <aside className="about-right">
          <h3>Vision</h3>
          <p>Ensuring no more death just for the need of blood</p>

          <h3>Mission</h3>
          <p>
            Connecting blood searchers with voluntary blood donors in a moment
            with the use of technology.
          </p>

          <h3>Objectives</h3>
          <ul>
            <li>Encouraging voluntary blood donation</li>
            <li>Creating awareness about safe blood transfer</li>
            <li>
              Enabling people to place blood requests via SMS, website, or
              Facebook
            </li>
            <li>
              Connecting voluntary blood donors via SMS or email
            </li>
          </ul>
        </aside>
      </main>
    </div>
  );
}
