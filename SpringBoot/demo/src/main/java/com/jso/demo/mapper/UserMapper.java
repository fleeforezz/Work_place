package com.jso.demo.mapper;

import com.jso.demo.dto.request.UserCreationRequest;
import com.jso.demo.dto.request.UserUpdateRequest;
import com.jso.demo.dto.respone.UserResponse;
import com.jso.demo.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreationRequest request);
    UserResponse toUserResponse(User user);
    void updateUser(@MappingTarget User user, UserUpdateRequest request);
}
