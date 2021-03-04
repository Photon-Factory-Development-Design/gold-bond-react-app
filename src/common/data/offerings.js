/**
 * offerings = [
 * {
 *      asin: "1123",
 *      offeringID,
 *      promo
 * }]
 * 
https://www.amazon.com/gp/item-dispatch?submit.addToCart&offeringID.1=QM03rVtz1Bfkt9Lk9wXsZg1He7MYjREYkoCGlEJHooOO1m78qiJmB%2F6zZfO6jhTonzBqgH5WRgz7D6SiQBpGmx7P%2FNY4Qaavq%2BZw4xFZoLanANOOBCrCZVwrOHgx931%2Fbapp2x6Ivj2a75CaON3GtA%3D%3D
 */
const offerings = [
    {
        asin: 'B00AHH00R4',
        offeringID:
            'QM03rVtz1Bfkt9Lk9wXsZg1He7MYjREYkoCGlEJHooOO1m78qiJmB%2F6zZfO6jhTonzBqgH5WRgz7D6SiQBpGmx7P%2FNY4Qaavq%2BZw4xFZoLanANOOBCrCZVwrOHgx931%2Fbapp2x6Ivj2a75CaON3GtA%3D%3D'
    },
    {
        asin: 'B00AHH00MO',
        offeringID:
            'VFnoe%2F2cWJ%2BvwCBALi7sN5IUFlWAGJXwL8B45Y6Wvdy2byn7uyn6o8y2mMeIk0qSOP3nJRIjQMzxKz2iwx38EFai2a%2BIb9jr89gSo5qQW4ArhwsQsmi1Y5PTlnB%2Fkqw9Z%2BpI2owB3%2FKJrL3Ewaf5og%3D%3D'
    },
    {
        asin: 'B013KPK71I',
        offeringID:
            'iVP%2BZndeSkU5nTH0fKG%2FNllRps7jXm5aymB6O8bIMIBegEWhEjQqL08NvA9nIn7afpSmnynPJELP%2BQoHTb%2Fc9dz%2FFFiOs%2BLY3u3zqSh59MV4pRl3AvICsSrS6gQ6Y01zonkdN92%2BAlCbU7kC8p7HvA%3D%3D'
    },
    {
        asin: 'B01EG7XDJW',
        offeringID:
            'WNt4dqCU6iYgqK7tNEWhINUBO%2FQiUZeasmqutsDWPoRr7bNVEcUg0W%2BmXqILiwNWcWDyxGQdD0B5JzH7Q4BrIiv6d0XcbijhJIwKitsUKE%2BCY4rxa90KZdra9uF7w1N1fUuk%2Bq1E40k4AmwxdqcqEA%3D%3D'
    },
    {
        asin: 'B074KM543R',
        offeringID:
            'O4Fki6QVon2U93mlHPJ2PJJ6uyClLbIami6TSaM5LmtO1pct8Bcq%2FDzo69D%2FLaD16gIvu37hb%2F0zfk3O%2F79F3vxSy2xuPvjMOU6%2BfJSQ%2Bo3bQNswalIW2NcjZ8na4q%2FfdQCHWqmCdFEXipGt1OqZXw%3D%3D'
    },
    {
        asin: 'B00B4CYRHA',
        offeringID:
            'IySfPoeQXfQMlhTjhAMT%2B6BeOywTBKFHLjGPrKIrVkcVGPp1KRqYZ2CNgZTt2W06vXc%2BE0jst9k9L3dzqxkZO1mNvDXCXHaIgc6bsES2YZIacQQ3EYz69zW%2FeJc7fzICAFY9ShCySuaS8zrKmLioIg%3D%3D'
    },
    {
        asin: 'B00B4CYSTC',
        offeringID:
            'nh2mfYK8V4F29QnJZOl3B%2FQySWA5ER%2BM6b46xDxGb6c0pREElWWuQDMGhMG0crB%2B8SLGxRJ6BtrCvtmaiueGH5KXrIGVgINn0PsLjpkXntNsifwGE8l%2Bh9qUCt%2FJCdQ%2F5WvI%2F4P8cmt7xMSBd8J%2B7A%3D%3D'
    },
    {
        asin: 'B07B447D3K',
        offeringID:
            '2gcS30NEkqtvfZ7%2Bf464qsKTTapWbuMTmRhSlhpovUsA6RqMz742YSXr9QARvGnLdK6afcfGPUi%2F75IX6gL5m7UD5La4mb6lFsvZjWrydsZ7bDKrVtwvQ1rh%2FTuNrRke%2BqAxLGAgazkrff4fQdnFLA%3D%3D'
    },
    {
        asin: 'B012FUWLG8',
        offeringID:
            '0T2RJoaMP5xuUDM4mee%2Ffp%2B8vj3WV4mjtigeqcUsj986jnAVCGWsiUnjFjiiAHjIT2AyVbsVU0F0VrX5eBZETCEuXMncbhZXfZNRjUmfMuR27D6YtHIwc7%2BK9jsPBLMieAh4%2F3816dvHZ%2B6rjdV0dQ%3D%3D'
    },
    {
        asin: 'B012FUXNGU',
        offeringID:
            'PDT1IgzLDZUv1LNEbLqwGWhrpJ9Prtks3m4E%2FU9uYRjFENLB9JzXQS8PIuq8hgX3vrHW1nZqQMcDYWvam6OdBiGyKfh26BdWtSFG2YWHRfckoaHhe7RcaIWN02IIMNZChTchDhoYyBaH9%2FAcmbQKkg%3D%3D'
    },
    {
        asin: 'B012FUY0U8',
        offeringID:
            'xfQna6JiuLbhGcE6Xm3qejeCY0Kq0%2FhRUYtWmKyO7Nl%2BSGyCrpE05%2FORivl%2FAzdYzxuTRbTYPfljtddRkgoKbSmwR3wPDmZAOJTRUzRU9kfbOqO6AU1HDpSQSmPRIGTl1AP0HNVhboLr29q%2BifkaBQ%3D%3D'
    }
];

export default offerings;
