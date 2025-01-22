package com.jso.demo.mapper;

import com.jso.demo.dto.request.UserCreationRequest;
import com.jso.demo.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreationRequest request);
}
