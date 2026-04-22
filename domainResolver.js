// # Domain Resolver

// You manage a shared web hosting server with multiple IP addresses, and where multiple domains can share the same IP address. Each domain can have multiple subdomains.

// Implement a class, `DomainResolver`, that supports three methods:

// - `register_domain(ip, domain)`: associates a domain with an IP. You can assume that this function will be called at most once for a given domain.
// - `register_subdomain(domain, subdomain)`: adds a subdomain to a domain. You can assume that the domain will have been previously registered. Different domains can have a subdomain with the same name.
// - `has_subdomain(ip, domain, subdomain)`: returns whether there is a domain registered at that IP that has the given subdomain.

// `IPs`, `domains`, and `subdomains` are strings.

// Example 1:
// resolver = DomainResolver()
// resolver.register_domain("192.168.1.1", "example.com")
// resolver.register_domain("192.168.1.1", "example.org")
// resolver.register_domain("192.168.1.2", "domain.com")
// resolver.register_subdomain("example.com", "a")
// resolver.register_subdomain("example.com", "b")
// resolver.has_subdomain("192.168.1.1", "example.com", "a")  # Returns True
// resolver.has_subdomain("192.168.1.1", "example.com", "c")  # Returns False
// resolver.has_subdomain("127.0.0.1", "example.com", "a")    # Returns False
// resolver.has_subdomain("192.168.1.1", "example.org", "a")  # Returns False
// resolver.has_subdomain("192.168.1.2", "example.com", "a")  # Returns False

// Example 2:
// resolver = DomainResolver()
// resolver.register_domain("1.1.1.1", "test.com")
// resolver.register_subdomain("test.com", "www")
// resolver.has_subdomain("1.1.1.1", "test.com", "www")  # Returns True

// Example 3:
// resolver = DomainResolver()
// resolver.has_subdomain("1.1.1.1", "test.com", "www")  # Returns False

// Constraints:

// - The number of calls to `register_domain` and `register_subdomain` will be at most `10^5`
// - The number of calls to `has_subdomain` will be at most `10^5`
// - All `IPs` follow the IPv4 format
// - Each octet is a number between `0` and `255`
// - All domains and subdomains are non-empty strings of length at most `100`

class DomainResolver {
  ips = {};
  domains = {};

  register_domain(ip, domain) {
    if (!this.ips[ip]) {
      this.ips[ip] = {};
    }
    // Actually, better to use a hash here instead of array, for performance lookups for has_subdomain
    this.domains[domain] = [];
    this.ips[ip][domain] = this.domains[domain];
  }

  register_subdomain(domain, subdomain) {
    this.domains[domain].push(subdomain);
  }

  has_subdomain(ip, domain, subdomain) {
    if (!this.ips[ip]) return false;
    if (!this.ips[ip][domain]) return false;
    if (!this.ips[ip][domain].includes(subdomain)) return false;
    return true;
  }
}

// Should have discussed time and space complexity here.

Example 1:
let resolver = new DomainResolver;
resolver.register_domain("192.168.1.1", "example.com");
resolver.register_domain("192.168.1.1", "example.org");
resolver.register_domain("192.168.1.2", "domain.com");
resolver.register_subdomain("example.com", "a");
resolver.register_subdomain("example.com", "b");
console.log(resolver.has_subdomain("192.168.1.1", "example.com", "a"));  // Returns True
console.log(resolver.has_subdomain("192.168.1.1", "example.com", "c"));  // Returns False
console.log(resolver.has_subdomain("127.0.0.1", "example.com", "a"));    // Returns False
console.log(resolver.has_subdomain("192.168.1.1", "example.org", "a"));  //Returns False
console.log(resolver.has_subdomain("192.168.1.2", "example.com", "a"));  // Returns False

console.log("Example 1:");
console.log('ips: ', resolver.ips);
console.log('domains: ', resolver.domains);

// Example 2:
let resolver2 = new DomainResolver;
resolver2.register_domain("1.1.1.1", "test.com");
resolver2.register_subdomain("test.com", "www");
console.log(resolver2.has_subdomain("1.1.1.1", "test.com", "www"));  // Returns True

console.log("Example 2:");
console.log('ips: ', resolver2.ips);
console.log('domains: ', resolver2.domains);

console.log('ips: ', resolver2.ips);
console.log('domains: ', resolver2.domains);

// Example 3:
let resolver3 = new DomainResolver;
console.log(resolver3.has_subdomain("1.1.1.1", "test.com", "www"));  // Returns False

console.log("Example 3:");
console.log('ips: ', resolver3.ips);
console.log('domains: ', resolver3.domains);

console.log('ips: ', resolver3.ips);
console.log('domains: ', resolver3.domains);


