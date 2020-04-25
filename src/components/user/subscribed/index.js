import React, { Fragment, useEffect, useState } from "react";
import { Typography, Divider, Table, Statistic } from "antd";
import { getDate } from "../../../utils/basic";

const { Title } = Typography;

const Subscribed = props => {
  const { getSubscribed, subscribed } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSubscribed()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: "Index",
      dataIndex: "key"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Date / Time ( 24Hr clock )",
      dataIndex: "date",
      render: (title, data) => <span>{renderDate(title)}</span>
    }
  ];

  const renderDate = data => {
    const { day, date, month, year, hours, minutes, seconds } = getDate(data);
    return (
      <Statistic
        value={`${day}, ${date} ${month},${year} `}
        suffix={`/ ${hours}:${minutes}:${seconds}`}
        valueStyle={{ fontSize: 15 }}
      />
    );
  };

  return (
    <Fragment>
      <Title level={3}>Subscribed User</Title>
      <Divider />
      <Table columns={columns} dataSource={subscribed} loading={loading} />
    </Fragment>
  );
};

export default Subscribed;
