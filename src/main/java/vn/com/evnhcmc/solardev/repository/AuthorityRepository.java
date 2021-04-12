package vn.com.evnhcmc.solardev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.com.evnhcmc.solardev.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
