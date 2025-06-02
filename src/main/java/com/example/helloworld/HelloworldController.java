package com.example.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.SQLException;
import java.sql.Statement;

@RestController
class HelloworldController {

    private final DataSource dataSource;

    public HelloworldController(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @GetMapping("/api")
    String hello(@RequestParam String surname) throws SQLException {
        String firstName = "";

        try (Statement stmt = dataSource.getConnection().createStatement()) {
            if (stmt.execute("select * from person where last_name = '" + surname + "'")) {
                if (stmt.getResultSet().next()) {
                    firstName = stmt.getResultSet().getString(2);
                }
            }

        }
        //whitespace rules
        return "Hello " + firstName + " 5 GOLD RINGS!";
    }
}
