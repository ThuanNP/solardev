package vn.com.evnhcmc.solardev;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("vn.com.evnhcmc.solardev");

        noClasses()
            .that()
            .resideInAnyPackage("vn.com.evnhcmc.solardev.service..")
            .or()
            .resideInAnyPackage("vn.com.evnhcmc.solardev.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..vn.com.evnhcmc.solardev.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
