"use client";
import React, { useState } from "react";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { ServiceCard } from "@/components/Service/ServiceCarousel";

import { services, upComingEvents } from "@/utils/constants";

import styles from "./events.module.scss";

type EventTabType = "Our Services" | "Upcoming Events";

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EventTabType>("Our Services");

  const handleActiveTab = (tab: EventTabType) => {
    setActiveTab(tab);
  };

  const Services: React.FC = () => {
    return (
      <>
        {services?.map((service, index) => {
          return (
            <ServiceCard
              key={index + 1}
              name={service?.name}
              img={service?.img}
              day={service?.day}
              location={service?.location}
            />
          );
        })}
      </>
    );
  };

  const UpcomingEvents: React.FC = () => {
    return (
      <>
        {upComingEvents?.map((event, index) => {
          return (
            <ServiceCard
              key={index + 1}
              name={event?.name}
              img={event?.img}
              day={event?.day}
              location={event?.location}
            />
          );
        })}
      </>
    );
  };
  const tabList: Record<string, JSX.Element> = {
    "Our Services": <Services />,
    "Upcoming Events": <UpcomingEvents />,
  };

  const tabHeader: Array<string> = Object.keys(tabList);

  return (
    <div className={styles["events"]}>
      <div className={styles["events__cross-icon"]}>
        <Icon icon="cross" />
      </div>
      <div className={styles["events__heading-wrapper"]}>
        <h1 className={styles["events__heading"]}>Events</h1>
        <p className={styles["events__heading-description"]}>
          Catch up on our <span>Recent Events</span>
        </p>
      </div>
      <div className={styles["events__tab-header-wrapper"]}>
        <ul className={styles["events__tab-header-container"]}>
          {tabHeader?.map((element, index) => {
            return (
              <li className={styles["events__tab-header-item"]} key={index + 1}>
                <button
                  className={styles["events__tab-header-button"]}
                  data-active={element === activeTab}
                  onClick={() => handleActiveTab(element as EventTabType)}
                >
                  {element}
                </button>
              </li>
            );
          })}
        </ul>

        <div className={styles["events__input-wrapper"]}>
          <input
            type="search"
            className={styles["events__input"]}
            placeholder="Search book"
          />
          <Button type="submit" label="Search" variant="primary" size="mini" />
        </div>
      </div>

      <div className={styles["events__content-wrapper"]}>
        {tabList[activeTab]}
      </div>
    </div>
  );
};

export default Events;
