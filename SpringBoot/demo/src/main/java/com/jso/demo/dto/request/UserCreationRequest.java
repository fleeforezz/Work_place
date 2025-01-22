package com.jso.demo.dto.request;

import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

//@Getter
//@Setter
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserCreationRequest {
    long id;
    @Size(min = 3, message = "USERNAME_INVALID")
    String username;
    @Size(min = 8, message = "INVALID_PASSWORD")
    String password;
    String firstname;
    String lastname;
    LocalDate birthday;

}
