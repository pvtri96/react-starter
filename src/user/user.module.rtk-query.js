import { Col, Row, Spin } from "antd";
import { useState } from "react";
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from "../store/rtk-query-user";
import { UserForm } from "./user.form";
import { UserList } from "./user.list";

export const UserModule = () => {
  const [updatingUser, setUpdatingUser] = useState(null);

  const { data: users = [], isLoading } = useGetAllUsersQuery();

  const [deleteUser] = useDeleteUserMutation();
  const onUserDelete = (user) => {
    deleteUser({ userId: user.id });
  };

  const onUserUpdateRequest = (user) => {
    setUpdatingUser(user);
  };

  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const onSubmit = (user) => {
    if (users.find((u) => user.id === u.id)) {
      updateUser({ userId: user.id, user });
      setUpdatingUser(null);
    } else {
      createUser({ user });
    }
  };

  return (
    <Row gutter={8}>
      <Col span={16}>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <UserList
            data={users}
            onDelete={onUserDelete}
            onUpdate={onUserUpdateRequest}
          />
        )}
      </Col>
      <Col span={8}>
        <UserForm updatingUser={updatingUser} onSubmit={onSubmit}></UserForm>
      </Col>
    </Row>
  );
};
