import React, { useEffect, Fragment, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import {
  Typography,
  Divider,
  Table,
  Popconfirm,
  Button,
  message,
  Switch,
  Input,
  Spin
} from "antd";

const { Title, Text } = Typography;

const { Search } = Input;

const TopContainer = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const CustomCard = styled.div`
  border: 1px solid #e8e8e8;
  margin-bottom: 24px;
  background: #f0f2f5;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  padding: 24px;
  border-radius: 2px;
`;

const FilterContainer = styled.div`
  display: flex;
`;

const Index = props => {
  const { getUnclean, unclean } = props;
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    getUnclean()
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        message.error("error in fetching data", 1);
      });
  }, [getUnclean]);

  const onSelectChange = selectedRowKeys => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "member_name",
      key: "member_name",
      render: (title, data) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <img
            src={data.image_url}
            style={{ width: 26, marginRight: 12 }}
            alt="name"
          />

          <a href={data.profile_url} target="_blank">
            {title}
          </a>
        </div>
      )
    },
    {
      title: "Group",
      dataIndex: "group_name",
      filters: [
        {
          text: "StartupTalky",
          value: "StartupTalky"
        },
        {
          text: "Others",
          value: "others"
        }
      ],
      onFilter: (value, record) => record.group_name.indexOf(value) === 0
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        // <div>
        //   <Popconfirm
        //     title="Are you sure delete this task?"
        //     // onConfirm={() => this.onDelete(record._id)}
        //     // onCancel={this.cancel}
        //     okText="Yes"
        //     cancelText="No"
        //   >
        //     <a href={() => {}}>Clean</a>
        //   </Popconfirm>
        // </div>

        <Button style={{ paddingLeft: 0 }} type="link">
          Clean
        </Button>
      )
    }
  ];

  return (
    <Fragment>
      <TopContainer style={{ justifyContent: "space-between" }}>
        <Title level={4} style={{ marginBottom: 0 }}>
          Unclean Data
        </Title>
        <Text>
          Filter
          <Switch
            style={{ marginLeft: 4 }}
            checked={filterStatus}
            onClick={() =>
              filterStatus ? setFilterStatus(false) : setFilterStatus(true)
            }
          ></Switch>
        </Text>
      </TopContainer>

      <Divider />

      {filterStatus && (
        <CustomCard>
          <FilterContainer>
            <Search
              placeholder="search for user"
              enterButton="Search"
              size="large"
              disabled
              onSearch={value => console.log(value)}
              style={{ flex: 3, maxWidth: 600, width: "100%" }}
            />
          </FilterContainer>
        </CustomCard>
      )}

      <TopContainer>
        <Text strong style={{ fontSize: 14 }}>{` Total Member Request : ${
          _.isEmpty(unclean) ? 0 : unclean.length
        }`}</Text>
        <div>
          {!!selectedRowKeys.length && (
            <Text
              style={{ marginRight: 16 }}
              type="secondary"
            >{`Selected ${selectedRowKeys.length} User`}</Text>
          )}
          <Button
            style={{ marginRight: 16 }}
            disabled={selectedRowKeys.length > 0 ? false : true}
          >
            Clean selected
          </Button>

          <Button disabled={unclean.length > 0 ? false : true}>
            Clean All
          </Button>
        </div>
      </TopContainer>

      <Spin spinning={false}>
        <Table
          rowKey={record => record.uid}
          bordered
          loading={loading}
          dataSource={unclean || []}
          columns={columns}
          pagination={true}
          rowSelection={rowSelection}
        />
      </Spin>
    </Fragment>
  );
};

export default Index;
