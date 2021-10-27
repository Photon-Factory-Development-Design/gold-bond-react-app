/**
 * {
 *      asin: "1123",
 * offerings = [
 *      offeringID,
 *      promo
 * }]
 * 
https://www.amazon.com/gp/item-dispatch?submit.addToCart&offeringID.1=QM03rVtz1Bfkt9Lk9wXsZg1He7MYjREYkoCGlEJHooOO1m78qiJmB%2F6zZfO6jhTonzBqgH5WRgz7D6SiQBpGmx7P%2FNY4Qaavq%2BZw4xFZoLanANOOBCrCZVwrOHgx931%2Fbapp2x6Ivj2a75CaON3GtA%3D%3D
 */
let offerings = [
    {
        url: 'https://www.amazon.com/gp/product/B015HRFXKM?th=1&psc=1',
        asin: 'B015HRFXKM',
        offeringID:
            'cN3PBtPvpk4d8gZOYQ0M343i5Feru8LI0Xx31TBMxEgJoK75EV78fvHiyDSbwNrhdcw9jXsniNfAZoHK%2B3EqGoxO8Bdx9diZtLe8Pf4hQ7RNjLh2kNzqjbNCGvXpwJ02mDB5JF8zjrKILedHsGfZfQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00TZ8TH9I?th=1&psc=1',
        asin: 'B00TZ8TH9I',
        offeringID:
            'XQY0ON%2F4bVO%2BwIwrWg4vh26MQkt6EQMtNiCXog3vekKKe%2FIbpqc1PLKTiUveB45hKZ5QjsBuYVWWp81NUGaRJCXds3X8U3BTNZus6W1qhdGRKx1QYS9RVzoGGfnqzwwsnFEfBbzNYzA%2FPZCvYbi%2FRw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08CJ74R3S?th=1&psc=1',
        asin: 'B08CJ74R3S',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=90.0.4430.30)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.3 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07W8Z1TY7?th=1&psc=1',
        asin: 'B07W8Z1TY7',
        offeringID:
            'LTTh6XMo0%2BMZbmy4kIiklyUeOZ9ejGlSqzjbYEyob62oMHeJQIwBnk3%2FFxnd7bGdBkguD0FOIryyeK%2BZM2jtytxC4WCAtW8KozHe5Ef6bx4qbGX4dMbhdl5TPXJAHkXq9HFdaDHsLdk63xmPlorlIQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B01B5D3VOC?th=1&psc=1',
        asin: 'B01B5D3VOC',
        offeringID:
            '9l1k9dK9lYrP%2FKzMK3A7nzPbTj1xlN9%2B4y9gJsP%2BFKwjuX%2Fcml1Tkk14Vde%2B%2B7CQtwfVU3f6t7bu8YNzy9a1RbX0wPH9213Rz3w51r3SwfxvB5YW0ZcZga3iErVI67EWeqylauKHnGLyx66OckmCyQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07BRQ2JZF?th=1&psc=1',
        asin: 'B07BRQ2JZF',
        offeringID:
            '%2BmsicESjcmXYQEmvP3UP4LVenjV5vCGr%2BqXOQujxYwxI0jJYsNHwoRywBo32KtdtUjnkGjOhJ6sbnoZv1JtFo9EmTEgvX9gIWryGlTOHXEmktiPg55ppoT%2BO5g%2BHDiVpynhysW6UotOJveaIDTS8HQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07JBLZ62H?th=1&psc=1',
        asin: 'B07JBLZ62H',
        offeringID:
            'l%2FWLMceUQH78jwJwRLOeMo2IXzfguUMCHHbcOaxkToYHBIoz1wYvnbFkP%2BTTR2R%2FBuPlQMfFqx%2BPuJfgwGmAF2a4%2By%2FNVTmUYwz2MT2qf2pTNVqULJPF45UC5KW%2BpsmpBEPCj6mg5wLS9A5GN4F1jA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08TPGYM4L?th=1&psc=1',
        asin: 'B08TPGYM4L',
        offeringID:
            'LlVm0sqfWVMDGfaK29u8xaVHEK7fLOmL5bLJev3ZTyz5AK1GZFdPHez0R2F3RGYyemVxXkPoQrw6tIglR9k2vnacwfq7buSLyTXH4%2FuVniSk7rpAmtyJFKcy9vw6MgTBQ62n%2Fx3TqVD4xgOed7rZS5813tIYdGeIgOzZ%2FcNcJGAohY%2Fe%2BmuQsg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00OCN96FQ?th=1&psc=1',
        asin: 'B00OCN96FQ',
        offeringID:
            'xHJ2ZSzEb2B4gdmwpBV33fc%2BBgx21L0xYIxwN3%2FZR%2BbE7aVIbyF%2FEw69DmkOUKc7glz074cc51Na7APZ8FdPpUuqVNGN32X1qUUrEtlbThYRJ%2FL6rk4MQ%2BpPWoeNffVKcg5Pjz629PTCvpzBqYmrjw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00O2?th=1&psc=1',
        asin: 'B00AHH00O2',
        offeringID:
            'uMDAYm3gDABxVH32XEPQ3CdlRqGw2aQXenNxxRiEZlLcBq%2FT5pw0fwSZhlXd%2FpL7CZpuJPB%2BBc6vjq0Mejb5WCjgLu3lCiKk3ujq73ISSKHIqwkFZsqUjM3yP08QipS%2BLLKVQfFHf5NWRSNcnlNl0g%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00OCN97DW?th=1&psc=1',
        asin: 'B00OCN97DW',
        offeringID:
            'L6trPCmNp%2B2OqAVHkgTuE%2B%2Badl5vgL0j2EjkNkKrD1R5DT51Q49UE1ffE0gCC%2BWBh7uT2IrGlxlZrqxF49NJJuAFZYXQbJWpblKhkf9xUtuj4%2FtDBwwe9%2Fbh6bjBeKvM%2BfAhgKzomwmhR5ZyJftk4juGANYu8FhNJFY%2Bn5GHRJnGc5J8SsEgfQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00OW9OTN4?th=1&psc=1',
        asin: 'B00OW9OTN4',
        offeringID:
            'fL9ceZV7QBLpvbynRbEPEFlvnti8CKVfekCHR5i6u0XyHWfE5Ov4PiegRk%2FtCUkmA1rVTqlrfhtgNEzsiPXATz%2BNP98dICo8%2Bxik20rBjhVJhcxKqwhbhbUuUKBOOv7Q3cEtBtV%2FoWaNRLEqxlloRg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00MO?th=1&psc=1',
        asin: 'B00AHH00MO',
        offeringID:
            '%2F%2FYu2Gk48AGeMQTtiz%2F68JGVPDx%2FGwG8oXGFsD4MtrTJe4%2BWY3LSGVTj97yXpXX6s1GhtjB7%2BHH9%2FkrEvaRqCahh0%2FM3Vha6qmW%2FsWAdpKUv5M%2FFbkZ9Y04ufVyeByZHwnP8aVjoNy6zb9mioax5Ww%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00R4?th=1&psc=1',
        asin: 'B00AHH00R4',
        offeringID:
            'Cg1n7FVKI6DM6%2FvbvIRYExtCQbEOsREQQ6GnTRr1nTSPcfeXRhid%2F%2B0vHt6WhPWq%2BkzYIa7ri85gTYaV%2B9N%2B2%2FUNFIMQ1bwQS%2Bxkrv5itUSWovIqltXuE2iavxb6SLGyj1lAMXFCPhRmTiqormMClA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B013KPK71I?th=1&psc=1',
        asin: 'B013KPK71I',
        offeringID:
            'oks2OayfEkcItV1UekUCjvXfoIWjxh6ko3CB2UxILECtUp9OORzkUgo2bMTPTRu8cTkHCqBOEpTNir33KNj7WLrVrKu%2Bc%2F1mCqr0jRNH16MKXe%2BGt%2BtelCIZHiyCGwq1FXVoxOUbQNSmTy%2BOBtrQLQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B074KM543R?th=1&psc=1',
        asin: 'B074KM543R',
        offeringID:
            'SNJOL31uG53u7WnjrBZQW6L18XXdjBLGQOHbjHga5zItIk6a20K3OW%2BonO8n8UNA5VUenXlcCfreSw8dmgjOyNJIJFhbZp%2FS0RUbmgET4CM9ZYRBkIEPuFLzBZ0xb22ufYXlWG19XzFqc94l%2F7FQow%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07WLNN8RQ?th=1&psc=1',
        asin: 'B07WLNN8RQ',
        offeringID:
            'jqolRM957TZqvbJ9RrPDsPx7tW1qhxUTnT4fgoS5fzvQxQo%2FM%2BD6Ea5sW4eW%2BBt%2BHVi6BBg82ndNkecJS8fbjkUgtkZrhgwDkRWdQbJWfL2ohW%2FJlsplxFoKpsCdpYTINyFNgwGfV7EaNx0%2FhONipg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07L9RTWRS?th=1&psc=1',
        asin: 'B07L9RTWRS',
        offeringID:
            'RJ6ra8yYFY0rAhmq%2BRtRB0f49l2ogeaedA2oaxAgPggL5OmUJLWWIxhIrg5%2FVe3j%2FO%2FwC4LnIuhl4hBQKnZYcj8EM8x6K%2BhP%2FPzWW3nKyZ7ww1eMeEQVdNFSU89p13uYn%2BdwLf5rw70YwWbnpLGQFw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B074MFDJRG?th=1&psc=1',
        asin: 'B074MFDJRG',
        offeringID:
            'hzwE79%2BnKhBf628CL1yVHiuomIf1f3tKkfcdVQg7vlx8tQA1dCaUDFXc0BVKLzwZmoDJyK8KQF1G5AqUot%2FpsndJRSXHrrzUeQUm0bt1LJKBtMCifYBn1HjwD92Fi8QmD%2FzaGLOfFFJApMRZsr5fpQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00H35BV2G?th=1&psc=1',
        asin: 'B00H35BV2G',
        offeringID:
            'Ruu1UBCIRd%2B3EHxaVAVfovb8VRIBVI%2BLgTIRjj5R7xol2%2BeelbZudIkUbUBFE0skaOhA31af30uYpmbpuOSO5gzI0mUdKSf6FleBYspT2wfHbmJlvxWIdt1zCEO39XMPRLssJCIvVjBy0cjKasGr8Q%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B008B9L6WS?th=1&psc=1',
        asin: 'B008B9L6WS',
        offeringID:
            'TaB%2BsdzEp5wcDqt5fCOHjt%2F%2F%2BNO4OAJMfq%2B%2FpbM0gHIeUf%2FOC4Ub3cNqHQVg98wqvXmvLoxOiP84ZD6S8brZUaFovdjpKKS%2FLPps97FuBjFKV%2BGpqDKvOEJbdAWbvhq0d1wQpP8M%2FSP2A5rBX8mQDw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001QFDTWO?th=1&psc=1',
        asin: 'B001QFDTWO',
        offeringID:
            'iBx93ejD1rsn%2FgG%2BynRpbX%2BoIipwpWyFEx%2F2ewVG8hen0%2F5hgoIg1zNxKLO0VHllVB%2F%2Fn0z5bTJJuGFVZtlx5oLSDMYx8U3DoESx3%2BC2Zc%2BYb%2BPvYCwbq97mj%2F22i%2BIspWn1rUGvqNNwRAILjBipEg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B006TCTAEA?th=1&psc=1',
        asin: 'B006TCTAEA',
        offeringID:
            'k%2BtAEHYrL0g5HZxU0uQEKQRu1rhNcMhY4J%2BJChShh358%2FwWIV2D%2BewG5vml3TwEY5XJO%2FW%2FUqtPOy31iuNs7SLEGYw8dNSRCRFBwx5XVbUAftE2eNMGjTsT%2BEdABAusl2v%2B%2Bq5uhsc5%2FV7z62W%2FLMw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07GVPCGJK?th=1&psc=1',
        asin: 'B07GVPCGJK',
        offeringID:
            '1gkwKAPD15UVPsS7H910Y1PIT3vfd2hTyILSh1qfOsaYQZiB%2FpQnoa0N1tWrE%2Buu%2BRyUBzrvJ1UQEHb9pQFaeLFEhAuunEqBSKgnq0RAghOd%2FSUx6KMgL6gH%2FDZx3rpRlUGaGUtafCAwOIohMzo65w%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00182ERTO?th=1&psc=1',
        asin: 'B00182ERTO',
        offeringID:
            'VqMK2y1OnpoLX88CPj6mETrai7bfrLuhykvKFDSSVHhSyIH3HbWzEwLPmLGZ5kuOlgoRwFONAXZh4jJk7k4mvXfAU%2FuC3FkyEagwNBA4Z1tqCPm8Y3HQt7itv3R%2BIPpfQKrehK5ECM%2BT0j5OhRe%2FXQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00NNIOU48?th=1&psc=1',
        asin: 'B00NNIOU48',
        offeringID:
            'KyX72WGuY6V6CaSeNRc7XnoR0tM1XE2m%2BQwO6FZBgeOlownvjfZmvLqbUa2E0ZEToE%2Bm0B01pBoDoZtUeYQbaP%2FA6jAyx2INZpK5pClahLMgEZsXx4VWj2LZmyTykpB6i650xP6Qg3%2B0PMMWaihVog%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00OW9OU2O?th=1&psc=1',
        asin: 'B00OW9OU2O',
        offeringID:
            'qt2F4%2BleCWxLsPKPWDnwWUvTApCSBNhOkFf8acQDyfk3qFa99nex8D7Or5IDro2N0thWjnn06tn2%2FOHx7ZPZmuCjxa80WFObR3%2FXS57qXbcoXyqk3jTWP%2FaOddxJ0hSTvNmCUSg8xBjGC9uWcmIQvw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001G8Y9VG?th=1&psc=1',
        asin: 'B001G8Y9VG',
        offeringID:
            'S9V9PHWXdI%2F%2Bnmn%2BJvl%2Bd7JMy36MeAoHksyDBYaZF%2B544uaLq%2F1WbXwsVWzPAg4FjmLxeSCEHFAbucMnXhbDfvP2O%2BW8es3EWzxFoKoQbo01u3yT61sOWhVxafO7%2FMhXb3sjoh7jPZw%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B074KM543R?th=1&psc=1',
        asin: 'B074KM543R',
        offeringID:
            'bSF183WJzmk8A6ZDxlVJxbDw7htmjIvzJXEVLS7eV821fP9mNHB6JuIPfNyN6fusC730crH57YDqw8TwKWt5jVXB%2BVqR7HqPYpEUt2XYex5ldgAT0HZENrvPKPz7D0D1U875sc%2BtSmOXbczT1r0I%2Bw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B06VVP4CLP?th=1&psc=1',
        asin: 'B06VVP4CLP',
        offeringID:
            'u2CPmNcvF%2BHMlBqBTula09zX%2BI9x%2FKHB2bJSsnLJaPAOjVndgOxMrKjhGkvo0bYwlGX3hrO5mAl6oLe6EvPVHSMhs9u3gmOnJfoJXpfaWm0lECKuESIsxsQ2eYoR1QbuJHXMfH7c5lRGHbCRPmRpHA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001MIZMIE?th=1&psc=1',
        asin: 'B001MIZMIE',
        offeringID:
            'hzuDZ1d%2F7DPnXU6MEPt3zYibRcVKbDnO2R7p7OhaoFI79imN6tAUMdsCAyTrvfy2zYvzGq8ar3nEK7cgKSL9F5rrR0BkWwt6cYvhWZHLOiAQk1muBLRoULxxBwdDvTEuok5brkmRA7M%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B0073E7JFK?th=1&psc=1',
        asin: 'B0073E7JFK',
        offeringID:
            'LmUthxxovqY37qxV0G%2FOxZIZNwa3URLnvNkkmzbQm5Y60XDn3uyhiPMGAHYeIxy15cNoeccF9w4%2BiglT0%2FiBWd1wXXT6OLM0GHqFvXtOtrNVTQi1maOAGxMWAIRIAdeNogHLd5FcQnUBi2s2JmLpQw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001ET78HY?th=1&psc=1',
        asin: 'B001ET78HY',
        offeringID:
            'gnvT7vX2biAVFw49qJCFInF3c926doMDN6yIh4bn2XtTdhDAFOtdCBBWjVWhiS%2Fek3SzDOA30OwmWc7Bc52ZMKlUvYwS10IYPVV9RitrVs2WxEx1AlqoHf%2FaFX96pWXQ6%2F4WntKhuT4%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08CJ2S9HJ?th=1&psc=1',
        asin: 'B08CJ2S9HJ',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=90.0.4430.30)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.3 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00A8S6HM4?th=1&psc=1',
        asin: 'B00A8S6HM4',
        offeringID:
            'ade7pU9ss5peYi5qhj9hRKkC2pSS4XSV9FLNbqiTuqHvDruHNqbcMO8w3eAS6VUs9zOITjAhguweJjw1TGzKJ%2F4YfJVVqwIeNAjQH4ijj68%2FQFa0tPQDR%2BnFvNsaetyCcdyq3LZrOUq4I%2BUr8MpBHQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08NQH1Z66?th=1&psc=1',
        asin: 'B08NQH1Z66',
        offeringID:
            'UVGvddgO0lyhY%2Bw7dCeIdWKAPymD%2FxspHRZ6VzgaCUT8FTNArh%2B5rMcsQDTYC6Jd2E3ryNpEjeHjtNmfc7%2F9TtZhYE25mcWKASZyyNhjCZQ1OYdNWCEe%2BGCsdytA9eUi3FwOWc0%2FQ5xGBIcZcpN9kA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B007VC9DKI?th=1&psc=1',
        asin: 'B007VC9DKI',
        offeringID:
            'wkBEUhDLC28JhuX5SWW8Zzsem10THP1dYVBN7KPmOvLKlgBIcd6oHkVkNrAqKpCShECw%2FCmEgvNL55ObQ3F5Nf21sAVHkKMRNwzsr92UqTD9iTtrGvW5tk94Caf8NLtAzG54wNczjDkat1LCSkjt%2Fw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00WVHRE7W?th=1&psc=1',
        asin: 'B00WVHRE7W',
        offeringID:
            'XB3vSK76BWta0eTyjKlgAAlkcF0b1BhIkTv%2BLzBtlZ6xiGJZAlLdP8hGAkSXO963Bh9JtONaPWnF2NVAu5uTxqPH4T9jWcSDC5LiZRg7LmNJsUf1jtVed86y%2BuoUy0TbDQOZKigl5bKYoS3hdcbM3A%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00OW9OTMK?th=1&psc=1',
        asin: 'B00OW9OTMK',
        offeringID:
            'MKJJKivc09Nlf6ypxnNONI7snEpTDV%2BDq%2BVmyvwXkcKuV3SxJYQV08cbW7fCe2g6V0Vvm6QsUy73WYel35UuX%2BPX9UdYm6L6lnZGeEMsinL1b7Alu%2BDj%2BOg9Sc71Mc%2FakMaCbXAg2%2FLxZDhOUzpitg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00GIHMOGW?th=1&psc=1',
        asin: 'B00GIHMOGW',
        offeringID:
            'YnpvMkxSTS2Z8iKtogIoR3HMfDWqse3bgfNWVLAEHzxl0HVGFQSDrVW8nZiw8O%2B9FMduG8JHVtQy0WUeczlKiqeYDsWh%2FyTe6bd9nptgQIw%2BVKSIYOCERKgnxxBQkqB1QZaSE3xRsGk%2FASOcshVbOA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B015SCP3A6?th=1&psc=1',
        asin: 'B015SCP3A6',
        offeringID:
            'UTHSvX5gCd0tOODRwY2iQzOnEbcfWfbg63Er99MTuptpr7BHu1IKK07uUnDwsFFKfEdbSOcTvbpiOVXlL8nId8BQchLuMfFrJqnGXzIiijCBRCDGL3FWBKplRR8Y5u7RnkPNRxLDZXUrML6OKYA82Q%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00P2V1CDG?th=1&psc=1',
        asin: 'B00P2V1CDG',
        offeringID:
            '%2BvQZ8z9PgjVOtj32jJCai%2Fp8L%2Fx7g%2BixKZtKh8MAlYMkfrAI%2F6xe1bjTsX3q935qIGk8SYQBiDxm2%2B550E6QAXKv6%2BGX%2B89fkcCJnOY2JyjioBn9pJYTRRGuCJs5qCK3vWlScNdSiV81x0J4Qkzbxw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B003QB26MA?th=1&psc=1',
        asin: 'B003QB26MA',
        offeringID:
            'mLeYj2cWL%2FPH6CLahibYYrTYaDyo0IbWzPbVbtO91cJ09Xlg7gD4De%2FN9juOMkcMTB9lmfGbw1bZp39154Ql5ZiuAi9umsHCEWCrpM2fLZkYoRO0%2FIFmVzbpKdOPmSH70YehP2RMpDryl7n1Mgl%2FbQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B01KVU94VY?th=1&psc=1',
        asin: 'B01KVU94VY',
        offeringID:
            'VrM5lSM2oBvwy%2F8mnIJnqaoUw2GZIhrQW9cQjEYKRAGs82Wp13meBV0JVenzGX05OPIFaI618lNonsvGZ3GoYfO%2FRoyUWXxMRXw3LWNFUsWmlpqPkVJDPcG3x6NngJjxc01REFai1UfEyRVMen1R1Q%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00MMKAM5E?th=1&psc=1',
        asin: 'B00MMKAM5E',
        offeringID:
            'VGS0BAhP%2BhXX%2BTyyPfb%2B5nvsWJeLbcFUFFwbqIZWLjMWh0YldT6INHbS0jZ50uTVFpBirqblzE9s4mNdEG5WZINYv%2F9rw4h43sKTTkQI2mfCc4gla64gM1uGSNOHodneAlqCm6NdAmU5tgF7Bq7lEA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08W5GNXBG?th=1&psc=1',
        asin: 'B08W5GNXBG',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=90.0.4430.30)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.3 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00126LXNO?th=1&psc=1',
        asin: 'B00126LXNO',
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=90.0.4430.30)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.3 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08W5F5X6Z?th=1&psc=1',
        asin: 'B08W5F5X6Z',
        offeringID:
            'taUFp0NtOWVy4nmsTtlT0zQaeVasT0nbF4MIrPgmncC1zDmpvca8Nrn1pcnym96zbu5z9u%2B3koULCPN6GnE57Kz7FmJwgOxG9mBgK9XfPNPxil6U7ylezmrsxfaRZ52JTLOMDWDBjO6raTHnZTCvbA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08W5DTJQR?th=1&psc=1',
        asin: 'B08W5DTJQR',
        offeringID:
            'px3rTt6EEZY9kFatuj4QI6S3yMrhCaAaWOC5OxW5cpdwjVkijRstukaFPWz5Jcd7%2FIFYPXffDGve%2BUG%2FfH%2BpHfRPJQhbR7urxXqUR5VV428r2S7ww5%2B4vKxfCOR1WM3Js17H%2F%2FiwRZaSai1VdKR%2BJA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08W5DK88Y?th=1&psc=1',
        asin: 'B08W5DK88Y',
        offeringID:
            'TSDfGvjjWX5bCXt8yrs42g5S4zsECnOWGQUREnaR9I8OFceiZ4GhgXzLsZ%2FHludftSPmkuIQ4806Rqo7iIfrT94vIQJbAPvPVyhRmHd1VANIx8%2FgXywrRzYXQ%2F6XI8JyjG%2B5GwruK5b%2F9zYl4Ih8Aw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUZ8NG?th=1&psc=1',
        asin: 'B012FUZ8NG',
        offeringID:
            '9p2BFqO%2B0WP7wn86y66gAfd8tRUI73G55rtJbt%2FWR25%2F5ZrgPOsb1Oy5P7Joh2s1WF8brhcNK3gscLxH7vWVtYgcj54B%2FhNgCDokLmZrj%2BATBaGxZhpFMg7AC4np1XBv7uPuhtjqrfVswBWrNgfumQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08W5FMHGG?th=1&psc=1',
        asin: 'B08W5FMHGG',
        offeringID:
            'Xq5Wr7Eby%2Fv9CJhmy2Qx7QEgoj2MwbX%2BV7LJxLUQ%2BONW5e6uHlVKtA7pnOvZkGOgb91fqqXICgQ0E9zN2cTvGsB8Wykplg6IaRZpSYUerqIOpOtK1f%2BlWnYg1D3nh3iQnhEpDRhR6vZtc2vCTaH0zg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08W5F2H15?th=1&psc=1',
        asin: 'B08W5F2H15',
        offeringID:
            'QVj69MiMk62y8V2Ap4kivtpW6YkRkD9XGzc0lYAJtTcNDLcOGaMYASkRpuMn5gABrGexk1WalQfvnl%2BdSe%2Fz74xhCp8KBFuU5li9wI3EL%2BQmAQmaK1X%2FjMbSCylFMQC0mXck0a4zq3rAkMIEjG3IuA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08W5FL1BT?th=1&psc=1',
        asin: 'B08W5FL1BT',
        offeringID:
            'fNpi89VDJIz7r7FFIN1bPmSdQC35LC3xTC6zS2oXrSvxRjfzVFJcO5iGZeDT7INSrKAQORdKxRMn3qJdlnUN861%2BR80xL%2BGO1ciMo%2BHs5iTYxvEN0KY2dMNpqNvMwFB3ZNibHQt5hb5g3vCOZce%2B8g%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08R5K6P28?th=1&psc=1',
        asin: 'B08R5K6P28',
        offeringID:
            'Eyit8q7YSfn2MRS4CT30Hy9CLBOkQH%2FKzFGAztFtc24eAZdpG%2BlCRsuuF4kePFkQrpemyF6jelpjG2dymgsOuT6PsnTRRJ3DBHvfsvr1HRA%2BDE71lJuBlQSdaJy5g4deW2CraYE%2FTRdu%2FUMfvZS%2FLuRkMgLFEwQWqRYYN8liVP6eCX9uVkoOVYLsX4ijxIZ6'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08W5DQXW9?th=1&psc=1',
        asin: 'B08W5DQXW9',
        offeringID:
            'eD39EnXQtIN0Ytf%2BVvKHf%2BWdeXWikP4H%2B4v1qC3VhQXZquzReZUc7f51mdo%2FAPPgFrg4V5lSRzPghFIqUsa1%2BR%2B1lXeO0LkGVfheznp1Niwc2kDkKvsPTN28RP6cijOlaOfoSqtMOgMjp9KJfECGuA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08W5GLXWT?th=1&psc=1',
        asin: 'B08W5GLXWT',
        offeringID:
            'TD3hRwxgQgYtq%2BHLLipoxTyMhMleF4Ifmg%2BU0HHLLoYHfZpbz1v42QvOGwX%2BHGRhzfKMHkn1aoBPNTL1CNn4kRI4qKBajJ3%2FjQzDeyF8LTNTgjOggy6X5eJsW2qbV8FDw6R55%2FTtwKdUaO2602rhnw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08W69NCD7?th=1&psc=1',
        asin: 'B08W69NCD7',
        offeringID:
            '%2FufRFzpmKC%2F05XclwYBvpvKaXPU7QqgjBhuOGEwgeMfg4fvmR86ompNucrzxVOlxV7g0i7LyyJQVmXnsNVJmibdFniVUoDpSaU5It0VL9UrFtU%2F76z6rBUIOT1PzZgBxI7J5bOoAnrKmDhP2h9C19g%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08YQX3SKH?th=1&psc=1',
        asin: 'B08YQX3SKH',
        offeringID:
            'qSSvF3skpDQAZx3IM8kMaLqo7IuDOjSpyYFEifInqc37S4nXaVmgRKx%2BIHfwC3bc%2B2RQph7pQlfBEWP7hcB95YnjEeMd45tOl1KQWb14E5utZWqnod2unxkJIMrqe8B9utRB3dmMVGCnrHtsip8D8w%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B09BXGL4G9?th=1&psc=1',
        asin: 'B09BXGL4G9',
        offeringID:
            'dR19KT4t1VIj%2F2Xvy9UQn7me9gSVaP35%2BfJ4FZ8GM0bJPs2mB55okZkJpOjvhTwQqCzknOCVZazfmA2NThDBrKXyEghx2QsuNq22ixj47WRaP9wX5%2FaZ%2Bjw6i4QKXV4Gp5zACwMVp5nnh2afqICIKA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B09BWQZ68V?th=1&psc=1',
        asin: 'B09BWQZ68V',
        offeringID:
            'XsMSbTHZ7n%2Fx7HlD8HwPPdkArFoJv8eC6tnxXPn0G1yQYoZealLI45c3SQCav8X3Rirgu5I%2Bq7AsJLi4YC2BFy8PNOV0h5VUESLrUcAvHESjiWh5EPl4EX%2Btte8BGFLBdQTNhvzbflFveFjC%2BEvtCA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00TC?th=1&psc=1',
        asin: 'B00AHH00TC',
        offeringID:
            'wxbPiqnR%2FRNz7lElJX%2FIi%2Fp6sVU%2FBBZNPUnQ5d4DNn5CHfDnjRP1Qtu1k%2FLrRrkKsHd%2Bk2egUFQoYWzrIggTtBsSr8CvHeuAYmqssq9bElymNEKX13c5aDRbQP4aa%2FH932Mq56EaZH5pGASPDrE%2B2Q%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07W7VNRKN?th=1&psc=1',
        asin: 'B07W7VNRKN',
        offeringID:
            'H7gBvvFtxVkvznGkrNMmt%2F1SEoE42hDTgvyqwbQg%2BgUzbsKxIHEqNFzICJGcogDVoD1kt6a1xUTnB7mUN182GajebMEvR%2FcBYflq%2FLxfmOF3NI5NPqFyomydsro5nGgodxxNlfsQs61xSi9IIQLoqKr8D5gCVLlfUwkmVwGPljg%2FLIZq%2F7bW6sfdIdNnS0G2'
    },
    {
        url: 'https://www.amazon.com/gp/product/B004X8KMU8?th=1&psc=1',
        asin: 'B004X8KMU8',
        offeringID:
            'pO1RHbog%2BJyWmqgpwfJn6YtMebYHsuhGG7BSlnnb0lksBi9a0iLIYaEUv5Gdi%2Bs4HYFgGpGpCgleuBkGqP0veR33%2Fazib%2Fm2NDX0HfSXa4SXgWXxywdYicdHr7Rrg%2FZ7WBkuDPWvUZoEbOcc%2FyXQ8Wwq9gQ6gxFmhdrKfqXXYb%2F8TrrBtw8Nx5t%2BeCCi9qJG'
    }
];

export const findOfferingIDFromAsin = (offerings, asin) => {
    return offerings.find((offering) => offering.asin === asin);
};

export const setOfferings = (_) => (offerings = _);

export default offerings;
