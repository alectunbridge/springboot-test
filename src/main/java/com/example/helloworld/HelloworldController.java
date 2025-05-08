package com.example.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;

@RestController
class HelloworldController {

    private final DataSource dataSource;

    public HelloworldController(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @GetMapping("/api")
    String hello(@RequestParam String name) {
        return "Hello " + name + "!";
    }
}
