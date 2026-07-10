package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        LOGGER.info("Inside main");
        countryService = context.getBean(CountryService.class);
        testGetAllCountries();
        testGetCountry();
        // testAddCountry();
        // testUpdateCountry();
        // testDeleteCountry();
        testFindCountryByCode();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End");
    }

    private static void testGetCountry() {
        LOGGER.info("Start");
        Country country = countryService.getCountry("IN");
        LOGGER.debug("Country: {}", country);
        LOGGER.info("End");
    }

    private static void testAddCountry() {
        LOGGER.info("Start");
        Country country = new Country("JP", "Japan");
        countryService.addCountry(country);
        LOGGER.info("Country Added Successfully");
        LOGGER.info("End");
    }

    private static void testUpdateCountry() {
        LOGGER.info("Start");
        Country country = new Country("JP", "Japan Updated");
        countryService.updateCountry(country);
        LOGGER.info("Country Updated Successfully");
        LOGGER.info("End");
    }

    private static void testDeleteCountry() {
        LOGGER.info("Start");
        countryService.deleteCountry("JP");
        LOGGER.info("Country Deleted Successfully");
        LOGGER.info("End");
    }

    private static void testFindCountryByCode() {
        LOGGER.info("Start");
        try {
            Country country = countryService.findCountryByCode("IN");
            LOGGER.debug("Country={}", country);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
        LOGGER.info("End");
    }
}
